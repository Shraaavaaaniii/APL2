let rectangle= {
    perimeter: (x, y)=> (2*(x+y)), area: (x, y)=> (x*y)
};

function Rectangle(l, b) {
    console.log("A rectangle with l = " + 
        l + " and b = " + b);

    if (l <=0 || b <=0) {
        console.log("Error! Rectangle's length & "
        + "breadth should be greater than 0: l = " 
        + l + ", and b = " + b);
    }

    else {
        console.log("Area of the rectangle: " 
            + rectangle.area(l, b));
        console.log("Perimeter of the rectangle: " 
            + rectangle.perimeter(l, b));
    }
}

Rectangle(1, 8);
Rectangle(3, 12);
Rectangle(-6, 3);