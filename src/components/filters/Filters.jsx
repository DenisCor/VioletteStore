import * as React from 'react';
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


 const Filters = () => {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  
const valuetext = (value) => {
  return `${value}£`;
}


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
            {categoryNames.map(cat => (
              <div key={cat.id}>
                <FormControlLabel key={cat.id} control={<Checkbox checked={cat.checked} size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">{cat.name}</Typography>} />
              </div>
            ))}
          </FormGroup>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography>
            Sort By:
          </Typography>
          <FormGroup>
            {sortByNames.map(cat => (
              <div key={cat.id}>
                <FormControlLabel key={cat.id} control={<Checkbox checked={cat.checked} size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">{cat.name}</Typography>} />
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
            <FormControlLabel value="female" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">Silver</Typography>} />
            <FormControlLabel value="male" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">Gold</Typography>} />
            <FormControlLabel value="other" control={<Radio size="small" style={{ width: "20px", padding: 0, marginLeft: '0.5rem' }} />} label={<Typography sx={{ paddingLeft: "5px" }} variant="body2">Rose gold</Typography>} />
          </RadioGroup>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography>
            Price:
          </Typography>
          <Box >
            <Slider
              getAriaLabel={() => 'Price range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </Grid>
      </Grid>
    </AccordionDetails>
  </Accordion>
  </>
  )
}

export default Filters;
