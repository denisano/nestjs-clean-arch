import { Migration } from '@mikro-orm/migrations';

export class Migration20220227015007 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `user` add `is_ready_to_play` tinyint(1) not null default true comment \'Flag: User ready to play now\';');
  }

  async down(): Promise<void> {
    this.addSql('alter table `user` drop `is_ready_to_play`;');
  }

}
