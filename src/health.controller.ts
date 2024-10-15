import { Get, Route } from "tsoa";

@Route()
export class HealthController {
  @Get("/health")
  public health(): { status: string } {
    return {
      status: "ok",
    };
  }
}
