module.exports = {
   extends: [
      'codingitwrong',
      'plugin:prettier/recommended',
      'prettier/react'
   ],

   parser: "babel-eslint",
   plugins: [
      "cypress",
      "jest",
      "react"
   ],
   env: {
      browser: true,
      "jest/globals": true,
      "node": true,
      "commonjs": true
   },
   globals: {
      "cy": true
   }

}