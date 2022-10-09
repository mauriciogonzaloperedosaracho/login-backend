import { Module } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { LoginController } from './controllers/login.controller';

@Module({
  providers: [LoginService],
  controllers: [LoginController]
})
export class LoginModule {}
