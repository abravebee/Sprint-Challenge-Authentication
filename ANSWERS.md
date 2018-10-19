<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
  Sessions allow a website to remember an authenticated user across pages, as opposed to forgetting and requiring reauthentication each time a new page is loaded.

2. What does bcrypt do to help us store passwords in a secure manner.
  Bcrypt allows us to use cryptographic hashing on stored passwords.

3. What does bcrypt do to slow down attackers?
  Attackers need to know much more information to decrypt a hashed password than a regular encrypted password. For encryption, all an attacker needs is the key and the encrypted password. For hash, an attacker needs the hash, the algo used to make the hash, and how many times it was run through.

4. What are the three parts of the JSON Web Token?
  Header, Payload, Signature
