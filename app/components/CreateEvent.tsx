'use client';

async function postData(url = 'api/create-wix-event', data = {}) {
  // Default options are marked with *
  try {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    if (error) return console.log((error as Error).message);
  }
}

export function CreateEvent() {
  const onClick = async () => {
    const response = await postData();
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
