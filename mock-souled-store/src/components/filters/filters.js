import React from 'react';
import './filters.css';
import Dropdown from '../dropdown/dropdown';
import { Button, Checkbox, Radio } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { connect } from 'react-redux';
import { filterProducts } from '../../actions/getProductsActions';

bootstrapUtils.addStyle(Button, 'custom');
class Filters extends React.Component {
    state = {
        size: null,
        themes: [],
        sortBy: null
    };
    x = [];
    
    getSizeDropDownContent = () => {
        let sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
        return sizes.map(item => {
            return <Button 
                    value={item} 
                    bsStyle="custom" 
                    className="size-button"
                    onClick={e => this.handleSizeSelect(e)}> {item} </Button>
        })
    }

    getCategoriesCheckbox = (categories) => {
       let categoriesList = categories.map( item => {
           return (
            <Checkbox name="checkbox" onClick={ e => this.handleThemeSelect(e)} value={item}>
              {item}
            </Checkbox>
           )
       })
       return categoriesList
       
    }

    getSortByRadioButtons = () => {
        let radioButtons = [`A to Z`, `Price - High to Low`, `Price - Low to High`, 'Newest', 'Popularity']
        return radioButtons.map(item => {
            return  <Radio onClick={e => this.handleSortBySelect(e)} value={item}>
           {item}
          </Radio>
      
        })
    }

    getThemesDropDownContent = () => {
        let themes = [ 
            {
                themeName: 'Superheroes',
                subCategories: [
                    'Batman',
                    'Spiderman',
                    'Flash',
                    'Wonder Woman'
                ]
            },
            {
                themeName: 'Film & TV',
                subCategories: [
                    'F.R.I.E.N.D.S',
                    'Big Bang Theory',
                    'Harry Potter',
                    'Star Wars'
                ]
            },
            {
                themeName: 'Cartoons & Comics',
                subCategories: [
                    'Scooby Doo',
                    'Peanuts',
                    'Looney Tunes',
                    'The Powerpuff Girls'
                ]
            }
        ];

        return themes.map( item => {
            return  <Dropdown 
                        dropDownName={item.themeName} 
                        content={this.getCategoriesCheckbox(item.subCategories)} 
                        isUnStyled={true}
                    />;
        });
    }

    handleSizeSelect = (e) => {
       this.setState({
        size: e.target.value
       })
    }
    handleThemeSelect = e => {
        if(this.x.includes(e.target.value)) {
            console.log('inside if', this.x.indexOf(e.target.value));
           this.x.splice(this.x.indexOf(e.target.value),1);
           console.log('x', this.x);
        } else {
            this.x.push(e.target.value);
        }
        this.setState({
            themes: this.x
        })
    }
    handleSortBySelect = e => {
        this.setState({
            sortBy: e.target.value
        })
    }
    handleFiltersSubmit = e => {
      this.props.filterProducts(this.state.size,this.state.themes);
    }
    handleFiltersClear = e => {
        for(let i=0 ; i < document.getElementsByName("checkbox").length; i++) {
            document.getElementsByName("checkbox")[i].checked = false;
        }
        this.props.filterProducts(this.state.size, []);
    }

    render() {
        const sizesContent = this.getSizeDropDownContent();
        const themesContent = this.getThemesDropDownContent();
        const sortByContent = this.getSortByRadioButtons();
        return (
            <div className="filters-container">
             <style type="text/css">
           {`
             .btn-custom {
              background-color: white;
              color: gray;
              border: 1px solid gray;
            }
           `}
           </style>
            <Dropdown dropDownName="SIZE" content={sizesContent} isDefaultExpanded={true}/>
            <Dropdown dropDownName="THEMES" content={themesContent}/>
            <Dropdown dropDownName="SORT BY" content={sortByContent}/>
            <div className="form-submit-button">
              <Button bsStyle="custom" 
                      className="form-submit-button1"
                      onClick={e => this.handleFiltersSubmit(e)}
              > APPLY </Button>
              <Button bsStyle="custom" onClick={e => this.handleFiltersClear(e)}> CLEAR </Button>
            </div>
            </div>
        )
    }
}

export default connect( state => ({
    products: state.products
  }), {filterProducts})(Filters);