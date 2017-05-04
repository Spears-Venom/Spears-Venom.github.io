ra = [48., 21., 51., 53., 49., 9., 34., 30., 38., 28., 40.,
	45., 17., 24., 50., 5., 11., 10., 36., 6., 23., 2.,
	32., 19., 26., 1., 7., 3., 43., 14., 12., 33., 37.,
	31., 15., 13., 35., 44., 27., 41., 54., 42., 47., 16.,
	39., 18., 8., 22., 25., 4., 46., 20., 52., 29.
]

pop_ra = [  1.,   2.,  10.,   3.,   4.,   5.,   6.,   7.,   8.,   9.,  11.,
        12.,  13.,  14.,  15.,  16.,  17.,  18.,  19.,  20.,  21.,  22.,
        23.,  24.,  25.,  26.,  27.,  28.,  29.,  30.,  31.,  32.,  33.,
        34.,  35.,  36.,  37.,  38.,  39.,  40.,  41.,  42.,  43.,  44.,
        45.,  46.,  47.,  48.,  49.,  50.,  51.,  52.,  53.,  54.]

count = 0;
count1 = 0;
count2 = 0;
var temp = 0;
for (var i = 0; i < data.length; i++) {
	if(typeof(data[i]["pop_2001"]) == 'string')
		data[i]["pop_2001"] = Number(data[i]["pop_2001"].split(",").join("")) ;
	if(typeof(data[i]["pop_2011"]) == 'string')
		data[i]["pop_2011"] = Number(data[i]["pop_2011"].split(",").join("")) ;
	if(typeof(data[i]["density_2001"]) == 'string')
		data[i]["density_2001"] = Number(data[i]["density_2001"].replace(',','')) ;
	if(typeof(data[i]["density_2011"]) == 'string')
		data[i]["density_2011"] = Number(data[i]["density_2011"].replace(',','')) ;
	if(typeof(data[i]["land_2011"]) == 'string')
		data[i]["land_2011"] = Number(data[i]["land_2011"].replace(',','')) ;
	if(typeof(data[i]["land_2001"]) == 'string')
		data[i]["land_2001"] = Number(data[i]["land_2001"].replace(',','')) ;

	data[i].land_growth = (data[i].land_2011 - data[i].land_2001)/data[i].land_2001 ;
	data[i].rank_density = parseInt(ra[i]) ;
	data[i].rank_pop = parseInt(pop_ra) ; 

	if(data[i].pop_2011 < 1.1e6)
		count += 1 ;
	if(data[i].pop_2011 >= 1.1e6 & data[i].pop_2011 < 10e6)
		count1 +=1 ;
	if(data[i].pop_2011 >= 10e6)
		count2 += 1;

	console.log(data[i].land_2011) ;
}




console.log(data) ;
console.log(count,count1,count2);




