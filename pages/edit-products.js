import {
    Banner,
    Card,
    DisplayText,
    Form,
    FormLayout,
    Layout,
    Page,
    PageActions,
    TextField,
    Toast,
    RangeSlider
  } from '@shopify/polaris';
  import gql from 'graphql-tag';
  import { Mutation } from 'react-apollo';
  import store from 'store-js';
  
  const UPDATE_PRICE = gql`
    mutation productVariantUpdate($input: ProductVariantInput!) {
      productVariantUpdate(input: $input) {
        userErrors {
          field
          message
        }
        product {
          title
        }
        productVariant {
          id
          price
        }
      }
    }
  `;



  class EditProduct extends React.Component {
    state = {
      price: '',
      variantId: '',
      sliderRate: 4.5,
      sliderPeriod: 4,
      sliderFrequency: 2,
      showToast: false,
    };
  
    componentDidMount() {
      this.setState({ discount: this.itemToBeConsumed() });
    }
  
    render() {
      const { name, price, discount, variantId } = this.state;

      const suffixStyles = {
        minWidth: '24px',
        textAlign: 'right',
      };
  
      return (
        <Mutation
          mutation={UPDATE_PRICE}
        >
          {(handleSubmit, { error, data }) => {
            const showError = error && (
              <Banner status="critical">{error.message}</Banner>
            );
            const showToast = data && data.productVariantUpdate && (
              <Toast
                content="Sucessfully updated"
                onDismiss={() => this.setState({ showToast: false })}
              />
            );

            return (
              <Page>
                <Layout>
                  {showToast}
                  <Layout.Section>
                    {showError}
                  </Layout.Section>
                  <Layout.Section>
                    <DisplayText size="large">{name}</DisplayText>
                    <Form>
                      <Card sectioned>
                        <FormLayout>
                          <FormLayout.Group>
                            <TextField
                              prefix="$"
                              value={price}
                              disabled={true}
                              label="Original price"
                              type="price"
                            />
                            <TextField
                              prefix="$"
                              value={(this.state.ordinaryAnnuity*this.state.sliderFrequency).toFixed(2)}
                              onChange={this.handleChange('discount')}
                              label="Annnual payments"
                              type="discount"
                            />
                            <TextField
                              prefix="$"
                              value={(this.state.ordinaryAnnuity*this.state.sliderPeriod*this.state.sliderFrequency).toFixed(2)}
                              onChange={this.handleChange('discount')}
                              label="Total amount to be payed"
                              type="discount"
                            />
                          </FormLayout.Group>
                          <RangeSlider
                            label="Interest rate"
                            min={0.1}
                            max={10}
                            step={0.1}
                            value={this.state.sliderRate}
                            onChange={this.handleSliderRateChange}
                            suffix={<p style={suffixStyles}>{this.state.sliderRate}%</p>}
                          />
                          <RangeSlider
                            label="Payback period"
                            min={1}
                            max={10}
                            step={1}
                            value={this.state.sliderPeriod}
                            onChange={this.handleSliderPeriodChange}
                            suffix={<p style={suffixStyles}>{this.state.sliderPeriod}  years</p>}
                          />
                          <RangeSlider
                            label="Payment frequency"
                            min={1}
                            max={12}
                            step={1}
                            value={this.state.sliderFrequency}
                            onChange={this.handleSliderFrequencyChange}
                            suffix={<p style={suffixStyles}>{this.state.sliderFrequency}/year</p>}
                          />
                        </FormLayout>
                      </Card>
                      <PageActions
                        primaryAction={[
                          {
                            content: 'Save',
                            onAction: () => {
                              const productVariableInput = {
                                id: variantId,
                                price: discount
                              };
                              handleSubmit({
                                variables: { input: productVariableInput },
                              });
                            },
                          },
                        ]}
                        secondaryActions={[
                          {
                            content: 'Remove discount'
                          },
                        ]}
                      />
                    </Form>
                  </Layout.Section>
                </Layout>
              </Page>
            );
          }}
        </Mutation>
      );
    }
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };

    handleSliderRateChange = (sliderRate) => {
        this.itemToBeConsumed();
        this.setState({sliderRate});
    };

    handleSliderPeriodChange = (sliderPeriod) => {
        this.itemToBeConsumed();
        this.setState({sliderPeriod});
    };

    handleSliderFrequencyChange = (sliderFrequency) => {
        this.itemToBeConsumed();
        this.setState({sliderFrequency});
    };
  
    itemToBeConsumed = () => {
      const item = store.get('item');
      const price = item.variants.edges[0].node.price;
      const variantId = item.variants.edges[0].node.id;
      const r = (this.state.sliderRate/this.state.sliderFrequency)/100;
      const n = this.state.sliderFrequency*this.state.sliderPeriod;
      const ordinaryAnnuity = ((r*price)/(1-(Math.pow(1 + r, -n)))).toFixed(2);
      this.setState({ price, variantId, ordinaryAnnuity});
  
    };
  }
  
  export default EditProduct;