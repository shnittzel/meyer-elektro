import type { MetadataRoute } from "next";

/*
  Diese Website ist eine oeffentliche Demo mit einem fiktiven Kunden
  ("Meyer Elektro"). Damit sie nicht in echten Suchergebnissen auftaucht,
  wird das Crawlen komplett untersagt. Fuer einen echten Kundenauftrag
  hier wieder "allow" setzen (siehe git-Historie fuer die vorige Version).
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
