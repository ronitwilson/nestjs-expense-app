import { Controller,Get } from "@nestjs/common";

@Controller('report/:type')
export class AppController {
  constructor() {
    console.log("AppController created");
  }
  @Get()
  getAllIncomeReports() {
    return [];
  }
  @Get(':id')
  getIncomeReportbyId() { 
    return {};
  }
}