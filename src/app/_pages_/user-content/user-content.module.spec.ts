import { UserContentModule } from './user-content.module';

describe('UserContentModule', () => {
  let userContentModule: UserContentModule;

  beforeEach(() => {
    userContentModule = new UserContentModule();
  });

  it('should create an instance', () => {
    expect(userContentModule).toBeTruthy();
  });
});
