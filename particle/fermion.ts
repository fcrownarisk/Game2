import '../state/activatedstate'
import '../state/eigenstate'
enum spin{
    spin1 = 1.5,spin3 = 3.5,
    spin5 = 5.5,spin6 = 6.5, 
    spin7 = 7.5
}
enum mass{
    mass0 = 6,
    mass1 = 7,
    mass2 = 8,
    mass3 = 9,
    mass4 = 10,
    mass5 = 11, 
}
namespace fermion{
     mass0 :{'spin3 - spin1'}
     mass1 :{'spin5 - spin3'}
     mass2 :{'spin6 - spin5'}
     mass3 :{'spin7 - spin6'}
     mass4 :{'spin1 + spin3 + spin5'}
     mass5 :{'spin6 + spin7'}
}

