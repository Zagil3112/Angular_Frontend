// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url:"http://localhost:8087/api/v1",

  // Certificados 
  category_pki_get:"https://localhost:8089/certificates/getcertificates",
  category_pki_post:"https://localhost:8089/certificates/create",

  // Usuarios 

  usuario_pki_get:"https://localhost:8089/users/getAll",
  usuario_pki_post:"https://localhost:8089/users/create/",

  // CAs

  ca_pki_get:"https://localhost:8089/ca/get_cas",
  ca_pki_post:"https://localhost:8089/ca/createCA",

  //User Token

  user_token:"https://localhost:8089/random/show_token/"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
