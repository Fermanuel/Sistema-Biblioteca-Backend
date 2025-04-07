import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DbModule, 
    AuthModule, 
    ConfigModule.forRoot({}), UserModule,
    UserModule
  ],
})
export class AppModule {}
