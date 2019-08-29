import { TestBed } from '@angular/core/testing';

import { BotChatService } from './bot-chat.service';

describe('BotChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BotChatService = TestBed.get(BotChatService);
    expect(service).toBeTruthy();
  });
});
