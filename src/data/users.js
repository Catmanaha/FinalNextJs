"use strict";

import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'src', 'data', 'users.json');

if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

export const addUser = (email, password) => {
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  const users = JSON.parse(usersData);

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) throw new Error("User already exists");

  users.push({ email, password });
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  console.log("Registered Users:", users);
};

export const findUser = (email, password) => {
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  const users = JSON.parse(usersData);
  return users.find(
    (user) => user.email === email && user.password === password
  );
};