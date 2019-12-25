import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import {
   Select,
   InputLabel,
   MenuItem,
   RadioGroup,
   FormControl,
   FormControlLabel,
   Radio,
   FormLabel,
   TextField
} from '@material-ui/core';


export default class GiveStuffForm extends Component {

   state = {
      pageNr: 0
   }

   warningDescription = () => {
      switch (this.state.pageNr) {
         case 0:
            return 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
         case 1:
            return 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'
         case 2:
            return 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'
         case 3:
            return 'Podaj adres oraz termin odbioru rzeczy.'
         default:
            return ''
      }
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   nextPage = () => { if (this.state.pageNr !== 5) this.setState({ pageNr: this.state.pageNr + 1 }) }
   prevPage = () => { if (this.state.pageNr !== 0) this.setState({ pageNr: this.state.pageNr - 1 }) }

   pageInput = () => {
      switch (this.state.pageNr) {
         case 0:
            return <div>
               <FormControl component="fieldset" >
                  <FormLabel component="legend">Zaznacz co chcesz oddać</FormLabel>
                  <RadioGroup aria-label="thingsChoice" name="thingsChoice" value={this.state.thingsChoice} onChange={this.handleChange}>
                     <FormControlLabel value="ubrania w dobrym stanie" control={<Radio />} label="ubrania, które nadają się do ponownego użycia" />
                     <FormControlLabel value="ubrania do wyrzucenia" control={<Radio />} label="ubrania, do wyrzucenia" />
                     <FormControlLabel value="zabawki" control={<Radio />} label="zabawki" />
                     <FormControlLabel value="książki" control={<Radio />} label="książki" />
                     <FormControlLabel value="inne" control={<Radio />} label="inne" />
                  </RadioGroup>
               </FormControl>

            </div>
         case 1:
            return <div>
               <InputLabel id="bagAmount">Liczba 60l worków</InputLabel>
               <Select labelId="bagAmount" id="selectBag" name='bagAmount' value={this.state.bagAmount} onChange={this.handleChange}>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
               </Select>
            </div>
         case 2:
            return <>
               <InputLabel id="location">Lokalizacja</InputLabel>
               <Select labelId="location" id="selectCity" name='location' value={this.state.location} onChange={this.handleChange}>
                  <MenuItem value="Poznań">Poznań</MenuItem>
                  <MenuItem value="Warszawa">Warszawa</MenuItem>
                  <MenuItem value="Kraków">Kraków</MenuItem>
                  <MenuItem value="Wrocław">Wrocław</MenuItem>
                  <MenuItem value="Katowice">Katowice</MenuItem>
               </Select>
               <FormControl component="fieldset" >
                  <FormLabel component="legend">Komu chcesz pomóc?</FormLabel>
                  <RadioGroup aria-label="whomToHelp" name="whomToHelp" value={this.state.whomToHelp} onChange={this.handleChange}>
                     <FormControlLabel value="dzieciom" control={<Radio />} label="dzieciom" />
                     <FormControlLabel value="samotnym matkom" control={<Radio />} label="samotnym matkom" />
                     <FormControlLabel value="bezdomnym" control={<Radio />} label="bezdomnym" />
                     <FormControlLabel value="niepełnosprawnym" control={<Radio />} label="niepełnosprawnym" />
                     <FormControlLabel value="osobom starszym" control={<Radio />} label="osobom starszym" />
                  </RadioGroup>
               </FormControl>
               <form noValidate autoComplete="off">
                  <TextField value={this.state.organization} name='organization'onChange={this.handleChange} label="Konkretna organizacja (opcjonalnie)" />
               </form>
            </>
         case 3:
            return <>
               <div>Podaj adres oraz termin odbioru rzecz przez kuriera</div>
               <div>Adres odbioru:</div>
               <TextField value={this.state.street} onChange={this.handleChange} name='street' label="Ulica" />
               <TextField value={this.state.city} onChange={this.handleChange} name='city' label="Miasto" />
               <TextField value={this.state.zipCode} onChange={this.handleChange} name='zipCode' label="Kod pocztowy" />
               <TextField value={this.state.phoneNr} onChange={this.handleChange} name='phoneNr' label="Numer telefonu" />
               
               <div>Termin odbioru:</div>
               <TextField value={this.state.date} onChange={this.handleChange} name='date' label="Data" />
               <TextField value={this.state.hour} onChange={this.handleChange} name='hour' label="Godzina" />
               <TextField value={this.state.comments} onChange={this.handleChange} name='comments' label="Uwagi dla kuriera" />
               
            </>
         case 4:
            return <>
               <div>Podsumowanie Twojej darowizny</div>
               <div>Oddajesz:</div>
               <div>
                  <div></div>
                  <div>4 worki, ubrania w dobrym stanie, dzieciom</div>
               </div>
               <div>
                  <div></div>
                  <div>dla lokalizacji: Warszawa</div>
               </div>
               <div>
                  <div>
                     <div>Adres odbioru:</div>
                     <div>
                        <div>
                           <div>Ulica</div>
                           <div>Miasto</div>
                           <div>Kod<br />pocztowy</div>
                           <div>Numer<br />telefonu</div>
                        </div>
                        <div>
                           <div>1</div>
                           <div>2</div>
                           <div>3</div>
                           <div>4</div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div>Termin odbioru:</div>
                     <div>
                        <div>
                           <div>Data</div>
                           <div>Godzina</div>
                           <div>Uwagi<br />dla kuriera</div>
                        </div>
                        <div>
                           <div></div>
                           <div></div>
                           <div></div>
                        </div>
                     </div>
                  </div>
               </div>

            </>
         case 5:
            return <>
               <SectionTitle>Dziękujemy za przesłanie formularza<br/>Na maila prześlemy wszelkie informacje o odbiorze</SectionTitle>
            </>
         default:
            return ''
      }
   }

   render() {
      return <div>
         <div>
            <div>Ważne!</div>
            <div>{this.warningDescription()}</div>
         </div>
         <div className='GiveStuffForm-banner'>
            <div>Krok {this.state.pageNr + 1}/4</div>
            <div>{this.pageInput()}</div>
            <div className='GiveStuffForm-buttons'>
               <div onClick={this.prevPage}>Wstecz</div>
               <div onClick={this.nextPage}>Dalej</div>
            </div>
         </div>
      </div>


   }
}