function Sunday() {
    let startday = 2014;
    let endday = 2050;


    for (let year = startday; year <= endday; year++) {
        let y = new Date(year, 0, 1);

        if (y.getDay() == 0) {
            console.log("1st january is being a sunday : ", year);
        }
    }


}


const gettheyear = Sunday();

