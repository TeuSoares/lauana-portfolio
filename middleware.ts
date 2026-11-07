import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Ignora /api, /_next, /_vercel e qualquer arquivo com extensão (imagens, PDFs, favicon...)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
