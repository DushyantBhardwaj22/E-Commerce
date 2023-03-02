import { DatoCMSPlugin } from "datocms-client";

export const datoCMSPlugin = DatoCMSPlugin.init({
  environment: process.env.DATO_CMS_ENVIRONMENT || "production",
  apiToken: process.env.DATO_CMS_API_TOKEN,
});

export const datoCMSClient = datoCMSPlugin.client;