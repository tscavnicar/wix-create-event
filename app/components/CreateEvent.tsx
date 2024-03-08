'use client';
import { getBrowserWixClient } from '@app/model/auth/wix-client.browser';
import { wixEvents } from '@wix/events';

export function CreateEvent() {
  const wixClient = getBrowserWixClient();

  const wixEvent1: wixEvents.Event = {
    title: "Nature's Symphony: A Musical Journey Through Wildlife.",
    shortDescription:
      "Immerse yourself in the enchanting harmony of nature's symphony as it intertwines with the power of music!",
    detailedDescription:
      "Join us for Nature's Symphony: A Musical Journey Through Wildlife at the iconic Royal Albert Hall.",
    location: {
      name: 'Royal Albert Hall',
      address: {
        addressLine: 'Kensington Gore, London SW7, UK',
        city: 'London',
        country: 'GB',
        postalCode: 'SW7 2BL',
        streetAddress: {
          name: 'Kensington Gore',
          number: 'SW7',
        },
      },
    },
    dateAndTimeSettings: {
      startDate: new Date('2024-09-14T19:00:00.000Z'),
      endDate: new Date('2024-09-14T23:00:00.000Z'),
      timeZoneId: 'Europe/Dublin',
      hideEndDate: false,
      showTimeZone: false,
    },
  };

  const onClick = async () => {
    const response = await wixClient?.wixEvents.createEvent(wixEvent1);
    console.log('createEvent reseponse: ', response);
  };
  return (
    <div className="pt-7">
      <button className="btn-main" onClick={onClick}>
        Create test event
      </button>
    </div>
  );
}
