import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaryComponent } from './glossary.component';


describe('test glossary',()=>{
  it(`should have as title 'Lean Business Canvas'`, async(() => {

    const fixture = TestBed.createComponent(GlossaryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Lean Business Canvas');
  }));
});
