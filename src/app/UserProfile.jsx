export default function UserProfile({ userName, userBio, userHobbies }) {
  // {
  //   !userName || userBio || userHobbies ? <h1>Missing User Info</h1> : null;
  // }

  return (
    <div>
      <h1>{!userName ? "Missing User Info" : userName}</h1>
      <p>{userBio ? userBio : "No Bio"}</p>
      {!userHobbies.length ? (
        <ul>
          {userHobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      ) : (
        <p>No Hobbies</p>
      )}
    </div>
  );
}
