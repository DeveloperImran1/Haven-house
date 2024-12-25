import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const added = () => toast.success("Successfully Added!");
const remove = () => toast.success("Successfully Removed!");
const exist = () => toast.error("Allready have an exist!");
// get estate
export const getEstate = () => {
    
    let estates = [];
    const storedEstates = localStorage.getItem("estates");
    if (storedEstates) {
        estates = JSON.parse(storedEstates);
    }
    return estates;
    
}


// stored estate
export const setEstate = (estate) => {
    let estates = getEstate();
    const isExist = estates.find(est => est.id === estate.id);
    if (isExist) {
        return exist();
    }
    estates.push(estate);
    const stringEstate = JSON.stringify(estates);
    localStorage.setItem("estates", stringEstate)
    added();
};


// remove estate
export const removeEstate = (estate) => {
    let estates = getEstate();
    const currentEstates = estates.filter(est => est.id !== estate.id);
    const stringCurrentEstates = JSON.stringify(currentEstates);
    localStorage.setItem("estates", stringCurrentEstates)
    remove()
}