import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  hello() {
    return { service: "rssb-hello-api", message: "Muraho! Onboarded with one command." };
  }

  @Get("health")
  health() {
    return { status: "ok" };
  }
}
