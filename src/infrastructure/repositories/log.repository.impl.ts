import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository {

  constructor(
    private readonly logDatesource: LogDatasource,
  ) { }

  saveLog(log: LogEntity): Promise<void> {
    return this.logDatesource.saveLog(log);
  }

  getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    return this.logDatesource.getLogs(severityLevel);
  }

}