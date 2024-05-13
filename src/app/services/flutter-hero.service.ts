import { Injectable } from "@angular/core";

type FlutterHero = {
  name: string;
  url: string;
  avatar: string;
}
@Injectable({
  providedIn: "root",
})
export class FlutterHeroService {
  addedNames: Array<FlutterHero> = [];
  heros: Array<FlutterHero> = [
    {
      name: "Ian Hickson",
      url: "https://twitter.com/Hixie",
      avatar: "https://pbs.twimg.com/profile_images/30575362/48_400x400.png",
    },
    {
      name: "Eric Seidel",
      url: "https://twitter.com/_eseidel?lang=en",
      avatar:
        "https://pbs.twimg.com/profile_images/947228834121658368/z3AHPKHY_400x400.jpg",
    },
    {
      name: "Roaa",
      url: "https://twitter.com/roaakdm",
      avatar:
        "https://pbs.twimg.com/profile_images/1670444521098805248/fl2c9oVH_400x400.jpg",
    },
    {
      name: "Nash",
      url: "https://twitter.com/Nash0x7E2",
      avatar:
        "https://pbs.twimg.com/profile_images/1617650039194783745/0rHg5GAf_400x400.jpg",
    },
    {
      name: "Remi Rousselet",
      url: "https://twitter.com/remi_rousselet",
      avatar:
        "https://pbs.twimg.com/profile_images/1072447244719284225/AVEGksps_400x400.jpg",
    },
  ];
}
