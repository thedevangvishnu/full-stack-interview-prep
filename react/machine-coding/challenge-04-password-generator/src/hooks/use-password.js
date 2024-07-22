import { useState } from "react";

import {
  LOWERCASE__LETTERS,
  UPPERCASE__LETTERS,
  NUMBERS,
  SYMBOLS,
} from "../libs/constants";
import { getRandomIndex } from "../libs/random";

export const usePassword = () => {
  const generatePassword = (
    passLength,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  ) => {
    const valueTypesMap = {
      isUpper: hasUpper,
      isLower: hasLower,
      isNumber: hasNumber,
      isSymbol: hasSymbol,
    };

    const includeValueTypesMap = {};
    for (const key in valueTypesMap) {
      if (valueTypesMap[key] === true) {
        includeValueTypesMap[key] = valueTypesMap[key];
      }
    }

    const keys = Object.keys(includeValueTypesMap);

    let password = [];

    // For all included-keys, at least one character for each key must be included in the password.
    keys.forEach((key) => {
      password.push(setPasswordCharacter(key));
    });

    // For rest of the length for the password, each character could be any of the included keys.
    while (password.length < passLength) {
      const randomKey = keys[getRandomIndex(keys.length)];
      password.push(setPasswordCharacter(randomKey));
    }

    // Shuffle the password array to ensure randomness
    password = password.sort(() => Math.random() - 0.5);

    return password.join("");
  };

  const calculateStrength = (value) => {
    let strength = "";

    if (value.length <= 6) {
      strength = "Very Poor";
    } else if (value.length <= 9) {
      strength = "Poor";
    } else if (value.length <= 12) {
      strength = "Average";
    } else if (value.length <= 16) {
      strength = "Strong";
    } else {
      strength = "Very Strong";
    }

    return strength;
  };

  return {
    generatePassword,
    calculateStrength,
  };
};

function setPasswordCharacter(key) {
  let char = "";
  if (key === "isLower") {
    char = LOWERCASE__LETTERS[getRandomIndex(LOWERCASE__LETTERS.length)];
  } else if (key === "isUpper") {
    char = UPPERCASE__LETTERS[getRandomIndex(UPPERCASE__LETTERS.length)];
  } else if (key === "isNumber") {
    char = NUMBERS[getRandomIndex(NUMBERS.length)];
  } else {
    char = SYMBOLS[getRandomIndex(SYMBOLS.length)];
  }

  return char;
}
