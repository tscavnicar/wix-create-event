import { wixEvents } from '@wix/events';
import { createClient, ApiKeyStrategy } from '@wix/api-client';

const createWixEvent = async () => {
  const myWixClient = createClient({
    auth: ApiKeyStrategy({
      apiKey: process.env.NEXT_PUBLIC_WIX_API_KEY || '',
      siteId: process.env.NEXT_PUBLIC_WIX_SITE_ID || '',
      accountId: process.env.NEXT_PUBLIC_WIX_ACCOUNT_ID || '',
    }),
    modules: {
      wixEvents,
    },
  });

  const wixEvent: wixEvents.Event = {
    title: 'Test',
    location: {
      name: 'Test locations',
    },
    // mainImage: imageData.publicUrl,
    shortDescription: 'test description',
    dateAndTimeSettings: {
      startDate: new Date(),
      endDate: new Date(),
    },
  };

  const result = await myWixClient.wixEvents.createEvent(wixEvent);

  return result;
};

export default createWixEvent;
