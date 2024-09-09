import { Controller,Delete,Get, Param, Post, Put } from "@nestjs/common";
import { data, ReportType } from "./data";

@Controller('report/:type')
export class AppController {
  constructor() {
    console.log("AppController created");
  }
  @Get()
  getAllIncomeReports(@Param('type') type: string) {
    let reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    let income_report = data.report.filter((report) => report.type === reportType);
    return income_report
  }
  @Get(':id')
  getIncomeReportbyId() { 
    return {};
  }
  @Delete(":id")
  deleteIncomebyId() {
    return "delete";
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