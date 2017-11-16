class Employee{
  calculatePayment();
  createHoursReport();
  writeEmployee();
}

function drawAllShapes(shapes){
    shapes.forEach(shape => {
      switch(shape.type){
        case "circle": 
          drawCirle(shape);
          break;
        case "square":
          drawSquare(shape);
          break;
      }
    })
}

class Shape{
  draw(){ }
}
class Circle extends Shape{
  draw(){ }
}
class Square extends Shape{
  draw(){ }
}
function drawAllShapes(shapes){
    shapes.forEach(shape => {
      shape.draw();
    })
}

class Rectangle{
  set height(h){
    this.height = h;
  }
  set width(w){
    this.width = w;
  }
}
class Square extends Rectangle{
  set height(h){
    this.height = h;
    this.width = h;
  }
  set width(w){
    this.width = w;
    this.height = h;
  }
}


class Stream{
  reset(){ }
  read(){ }
  write(){ }
}
class ReadOnlyFile extends Stream{
  reset(){ }
  read(){ }
  write(){ }
}
class Square extends Stream{
  bark(){ }
}

interface Stream{
  void Read(){ }
  void Write(){ }
}
class File implements Stream{
  void Read(){ }
  void Write(){ }
}
class Keyboard implements Stream{
  void Read(){ }
  void Write(){
    throw new UnsupportedOperationException();
  }
}
class Printer implements Stream{
  void Read(){ 
    throw new UnsupportedOperationException();
  }
  void Write(){ }
}

interface ReadableStream{
  void Read(){ }
}
interface WritableStream{
  void Write(){ }
}
class File implements ReadableStream, WritableStream{
  void Read(){ }
  void Write(){ }
}
class Keyboard implements ReadableStream{
  void Read(){ }
}
class Printer implements WritableStream{
  void Write(){ }
}