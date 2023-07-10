import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent implements OnInit {
  timeLeft: number = 0;
  interval: any;


  get minutes() {
    return Math.floor(this.timeLeft / 60);
  }

  get seconds() {
    return this.timeLeft % 60;
  }

  ngOnInit(): void {
    this.timeLeft;
  }

  public start() {
    if (this.timeLeft > 0) {
      this.interval = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft === 0) {
          this.stop();
        }
      }, 1000);
    }
  }

  public stop() {
    this.timeLeft = 0;
    clearInterval(this.interval);
    this.interval = null;
  }

  public aumentaUm() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 1;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 1;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 1;
    } else {
      this.timeLeft += 1;
    }
  }

  public aumentaDois() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 2;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 2;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 2;
    } else {
      this.timeLeft += 2;
    }
  }

  public aumentaTres() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 3;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 3;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 3;
    } else {
      this.timeLeft += 3;
    }
  }

  public aumentaQuatro() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 4;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 4;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 4;
    } else {
      this.timeLeft += 4;
    }
  }

  public aumentaCinco() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 5;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 5;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 5;
    } else {
      this.timeLeft += 5;
    }
  }

  public aumentaSeis() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 6;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 6;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 6;
    } else {
      this.timeLeft += 6;
    }
  }

  public aumentaSete() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 7;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 7;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 7;
    } else {
      this.timeLeft += 7;
    }
  }

  public aumentaOito() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 8;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 8;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 8;
    } else {
      this.timeLeft += 8;
    }
  }

  public aumentaNove() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 9;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 9;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 9;
    } else {
      this.timeLeft += 9;
    }
  }

  public aumentaZero() {
    if (this.timeLeft >= 60) {
      this.timeLeft *= 10;
      this.timeLeft += 0;
    } else if (this.timeLeft >= 10) {
      this.timeLeft *= 6;
      this.timeLeft += 0;
    } else if (this.timeLeft > 0) {
      this.timeLeft *= 10;
      this.timeLeft += 0;
    } else {
      this.timeLeft += 0;
    }
  }

  public aumentaMin() {
    this.timeLeft += 60;
  }

  public aumentaTrintaSec() {
    this.timeLeft += 30;
  }
}
