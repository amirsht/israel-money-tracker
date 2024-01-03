import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { URLs } from './constants';

@Injectable()
export class LeumiService {
  async scrapeFromBank() {
    // Remove headless comment in order to debug and watch the browser do it's work
    const browser = await puppeteer.launch(/*{headless: false}*/);
    const page = await browser.newPage();

    const cookies = await page.cookies();
    await Promise.all(
      cookies.map(async (cookie) => {
        await page.deleteCookie(cookie);
      }),
    );

    await loginToLeumi(page);

    await goToNISCheckingPage(page);

    await loadAllNISCheckingPeriod(page);

    await getAllNISTransactions(page);

    await goBackToHomePage(page);

    await goToDollarsPage(page);

    await loadAllDollarsAccountPeriod(page);

    await getAllDollarsTransactions(page);

    await goBackToHomePage(page);

    await goToCreditCardPage(page);

    await loadAllCreditCardPeriod(page);

    await getAllCreditCardTransactions(page);

    await browser.close();
  }

  loginToLeumi(page) {
    const LEUMI_URL = URLs.BASE_URL + '/H/Login.html';
    const USER_ID_INPUT = '#uid';
    const PASSWORD_INPUT = '#password';
    const PASSWORD_FAKE_INPUT = '#password_fake';

    const username = `User`;
    const password = `Pass`;

    await page.goto(LEUMI_URL);

    await page.type(USER_ID_INPUT, username);

    await page.type(PASSWORD_INPUT, password);

    await page.type(PASSWORD_FAKE_INPUT, password);

    await page.click('input[id="enter"]');

    await page.setViewport({ width: 1024, height: 768 });

    await page.waitForNavigation();

    console.log('before main page');
    try {
      await page.waitForSelector('div[leumi-content="NISChecking"]');
    } catch (error) {
      console.error(console.log('error main page', error));
    }
    console.log('after main page');

    console.log('before walkme');

    await closeWalkMe(page);

    console.log('after main walkme');
  }
}
