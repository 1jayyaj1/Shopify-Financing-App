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
  import { Redirect } from '@shopify/app-bridge/actions';
  import * as PropTypes from 'prop-types';

  
  
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
      sliderPeriod: 4.0,
      sliderFrequency: 2.0,
      ordinaryAnnuity: '',
      annualPayment: '',
      futureValue:'',
      showToast: false,
    };
  
    componentDidMount() {
      this.itemToBeConsumed();
    }

    static contextTypes = {
        polaris: PropTypes.object,
    };

    redirectToProduct = () => {
        const redirect = Redirect.create(this.context.polaris.appBridge);
        redirect.dispatch(
            Redirect.Action.APP,
            '/',
        );
    };
  
    render() {
      const { name, price, futureValue, variantId } = this.state;

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
                              value={this.state.annualPayment}
                              onChange={this.handleChange('payments')}
                              label="Annnual payments"
                              type="payments"
                            />
                            <TextField
                              prefix="$"
                              value={this.state.futureValue}
                              onChange={this.handleChange('total')}
                              label="Total amount to be payed"
                              type="total"
                            />
                          </FormLayout.Group>
                          <RangeSlider
                            label="Interest rate"
                            min={1.0}
                            max={10.0}
                            step={0.1}
                            value={this.state.sliderRate}
                            onChange={this.handleSliderRateChange}
                            suffix={<p style={suffixStyles}>{this.state.sliderRate}%</p>}
                          />
                          <RangeSlider
                            label="Payback period"
                            min={1.0}
                            max={10.0}
                            step={1}
                            value={this.state.sliderPeriod}
                            onChange={this.handleSliderPeriodChange}
                            suffix={<p style={suffixStyles}>{this.state.sliderPeriod}  years</p>}
                          />
                          <RangeSlider
                            label="Payment frequency"
                            min={1.0}
                            max={12.0}
                            step={1.0}
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
                                price: futureValue
                              };
                              handleSubmit({
                                variables: { input: productVariableInput },
                              });
                            },
                          },
                        ]}
                        secondaryActions={[
                            {
                            content: 'Back',
                            onAction: () => {
                                this.redirectToProduct()
                            },
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
        this.setState({sliderRate});
        this.itemToBeConsumed();
    };

    handleSliderPeriodChange = (sliderPeriod) => {
        this.setState({sliderPeriod});
        this.itemToBeConsumed();
    };

    handleSliderFrequencyChange = (sliderFrequency) => {
        this.setState({sliderFrequency});
        this.itemToBeConsumed();
    };
  
    itemToBeConsumed = () => {
      const item = store.get('item');
      const price = item.variants.edges[0].node.price;
      const variantId = item.variants.edges[0].node.id;
      const r = (this.state.sliderRate/100)/this.state.sliderFrequency;
      console.log(r)
      const n = this.state.sliderFrequency*this.state.sliderPeriod;
      console.log(n)
      const ordinaryAnnuity = ((r*price)/(1-(Math.pow(1 + r, -n)))).toFixed(2);
      console.log(ordinaryAnnuity)
      const annualPayment = (ordinaryAnnuity*this.state.sliderFrequency).toFixed(2)
      const futureValue = (annualPayment*this.state.sliderPeriod).toFixed(2)
      this.setState({ price, variantId, ordinaryAnnuity, annualPayment, futureValue });
    };
  }
  
  export default EditProduct;