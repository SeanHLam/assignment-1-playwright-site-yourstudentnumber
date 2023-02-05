import AppButton from "./button";
import React, { useState, useEffect } from "react";
export default function ContactForm({}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {}, [firstName, lastName, email]);

  return (
    <div className="formCont">
      <form>
        <fieldset>
          <table>
            <thead>
              <tr className="nameCont">
                <th>
                  <label>First Name:</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </th>
                <th>
                  <label>Last Name:</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>
                  <label>Email:</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </th>
              </tr>
            </thead>
          </table>
        </fieldset>
      </form>

      <div className="errorCont">
        {/^([A-Z]+[a-zA-Z]*$)$/.test(firstName) ||
        firstName.length === 0 ? null : (
          <p className="errorText">
            First Name Error. First letter must be capital. Must use alphabets
            only.
          </p>
        )}

        {/^([A-Z]+[a-zA-Z]*$)$/.test(lastName) ||
        lastName.length === 0 ? null : (
          <p className="errorText">
            Last Name Error. First letter must be capital. Must use alphabets
            only.
          </p>
        )}

        {/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ||
        email.length === 0 ? null : (
          <p className="errorText">Email is invalid.</p>
        )}

        {/^([A-Z]+[a-zA-Z]*$)$/.test(firstName) && /^([A-Z]+[a-zA-Z]*$)$/.test(lastName) 
        && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ? (
          <div className="submitCont">
          <AppButton link="/" text="submit"></AppButton>
        </div>) : null
        
        }

       
      </div>
    </div>
  );
}
