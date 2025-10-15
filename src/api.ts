import axios from "axios";
import { Mail } from "./types/Mail";

const MAIL_API_URL =
  "https://mainapigateway-todo-app-backend-mysql-production-80edfbed.stacktape-app.com";

export async function getPrimaryMails(): Promise<Mail[]> {
  const result = await axios.get(MAIL_API_URL + "/mails/primary");

  return result.data;
}

export async function getPromotionsMails(): Promise<Mail[]> {
  const result = await axios.get(MAIL_API_URL + "/mails/promotions");

  return result.data;
}

export async function getSocialMails(): Promise<Mail[]> {
  const result = await axios.get(MAIL_API_URL + "/mails/social");

  return result.data;
}
