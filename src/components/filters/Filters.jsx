
import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import { categoryNames, sortByNames } from '../../../utils/constants';
import {colors} from '../../../utils/constants'
import _ from 'lodash'

 const Filters = ({products}) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);


  const [categories, setCategories] = useState([])
  const [sortByOptions, setSortByOptions] = useState([])


 



const handleChange2 = (event, newValue) => {
  console.log("handleChange2 newValue", newValue);
  setMin(newValue[0]);
  setMax(newValue[1]);
};

useEffect(() => {
  setCategories(categoryNames)
  setSortByOptions(sortByNames)
},[])



   const handleCategories = (category) => {
    if (category.name === "All") {
      setCategories((p) => p.map((i) => ({ ...i, checked: i.name === "All" })));
      return;
    }
    const changed = categories.map((i) => {
      if (i.name === category.name) {
        return { ...i, checked: !i.checked };
      }
      if (i.name === "All") {
        return { ...i, checked: false };
      }
      return i;
    });
    const allUnchecked = changed.every(i => i.checked === false)
    if(allUnchecked){
      setCategories(categoryNames);
      return;
    }
    setCategories(changed);
  };

  


  
  const handleSortBy = (option) => {
   console.log('option', option)
   if (option.name === "Default") {
    setSortByOptions((p) => p.map((i) => ({ ...i, checked: i.name === "Default" })));
    return;
  }
  const changed = sortByOptions.map((i) => {
    if (i.name === option.name) {
      return { ...i, checked: !i.checked };
    }else{
      return { ...i, checked: false };
    }
    
    return i;
  });
  const allUnchecked = changed.every(i => i.checked === false)
  if(allUnchecked){
    setSortByOptions(sortByNames);
    return;
  }
  setSortByOptions(changed);
  };






  return (
    <>
    <Accordion sx={{marginBottom:'1rem', padding:'0.5rem 1rem'}}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Button variant="outlined">Filters</Button>
    </AccordionSummary>
    <AccordionDetails> 
      <Grid container>
        <Grid item lg={3} xs={12}>
          <Typography>
            Category:
          </Typography>
          <FormGroup>
            {categories.map(category => (
              <div key={category.id}>
                <FormControlLabel key={category.id} 
                control={<Checkbox name={category.name} onClick={() => handleCategories(category)} checked={category.checked} size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} 
                label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">{category.name}</Typography>} />
              </div>
            ))}
          </FormGroup>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography>
            Sort By:
          </Typography>
          <FormGroup>
            {sortByOptions.map(option => (
              <div key={option.id}>
                <FormControlLabel key={option.id} control={<Checkbox onClick={() => handleSortBy(option)}  checked={option.checked} size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">{option.name}</Typography>} />
              </div>
            ))}
          </FormGroup>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography>
            Colour:
          </Typography>
    
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {colors.map(each => (
                  <>
                         <FormControlLabel value="female" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />}
                    label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">{each.name}</Typography>} />
                  </>
                ))}
              </RadioGroup>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography>
            Price:
          </Typography>
          <Box>
            {/* <Slider
              getAriaLabel={() => 'Price range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              // max="500"
              // min="0"
              size="medium"
            /> */}
              <Slider
          getAriaLabel={() => "Route Difficulty"}
          value={[min, max]}
          min={0}
          max={500}
          onChange={handleChange2}
          valueLabelDisplay="auto"
          // getAriaValueText={() => valuetext(value)}
        />
         
                <Button variant="contained" sx={{marginTop:'4rem', marginLeft:'9rem'}}>
                  <Typography variant="subtitle2">Apply Filters</Typography>
                </Button>
          
          </Box>
        </Grid>
      </Grid>
    </AccordionDetails>
  </Accordion>
  </>
  )
}

export default Filters;
