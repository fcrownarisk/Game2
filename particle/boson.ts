import '../state/Cohereststate'
import '../state/Degeneratestate'
enum spin {
    spin1 = 1, spin2 = 2,
    spin3 = 3, spin4 = 4,
    spin5 = 5, spin6 = 6,
    spin7 = 7
}
enum Mass{
    Mass0 = 3,
    Mass1 = 4,
    Mass2 = 5,
}
interface boson{
    (spin1 :'spin2') ; Mass0
    (spin3 :'spin4:spin5'); Mass1
    (spin6 :'spin7'); Mass2
}