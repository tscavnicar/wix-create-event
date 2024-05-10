import { NextRequest, NextResponse } from 'next/server';
import { ApiKeyStrategy, createClient } from '@wix/sdk';
import { wixEventsV2 } from '@wix/events';

export async function POST(request: NextRequest) {
  const wixClient = createClient({
    modules: {
      wixEventsV2,
    },
    auth: ApiKeyStrategy({
      apiKey: process.env.NEXT_PUBLIC_WIX_API_KEY || '',
      siteId: process.env.NEXT_PUBLIC_WIX_SITE_ID || '',
    }),
  });

  const event = await wixClient.wixEventsV2.createEvent(
    {
      dateAndTimeSettings: {
        dateAndTimeTbd: false,
        dateAndTimeTbdMessage: 'TBD',
        showTimeZone: false,
        timeZoneId: 'Europe/Dublin',
        hideEndDate: false,
        startDate: new Date(),
        endDate: new Date(),
      },
      registration: {
        initialType: wixEventsV2.InitialRegistrationTypeType.RSVP,
      },
      detailedDescription: 'Test description',
      guestListSettings: {
        displayedPublicly: false,
      },
      location: {
        locationTbd: true,
        name: 'TBD',
        type: wixEventsV2.LocationType.VENUE,
      },
      title: 'Test Title',
    },
    {
      draft: false,
    }
  );

  const updateEvent = {
    event: {
      mainImage:
        'https://images.pexels.com/photos/6501271/pexels-photo-6501271.jpeg',
    },
  };

  const result = await wixClient.wixEventsV2.updateEvent(
    event._id,
    updateEvent
  );
  return NextResponse.json(event);
}
