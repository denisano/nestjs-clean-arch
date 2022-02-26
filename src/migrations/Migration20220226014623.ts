import { Migration } from '@mikro-orm/migrations';

export class Migration20220226014623 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` varchar(36) not null comment \'User ID (UUID v4)\', `name` varchar(48) not null comment \'User name\', `email` varchar(128) not null comment \'User email\', `created_at` datetime not null comment \'Entity create datetime\', `updated_at` datetime not null comment \'Entity update datetime\', primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
  }

}
