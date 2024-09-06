import { Controller,Delete,Get, Post, Put } from "@nestjs/common";

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
  @Delete(":id  ")
  deleteIncomebyId() {
    return {};
  }
  @Post()
  createIncomeReport() {
    return {};
  }
  @Put(':id')
  updateIncomeReport() {
    return {};
  }

}