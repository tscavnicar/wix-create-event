'use client';
import createWixEvent from 'actions/createWixEvent';

export function CreateEvent() {
  const onClick = async () => {
    const response = await createWixEvent();
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
