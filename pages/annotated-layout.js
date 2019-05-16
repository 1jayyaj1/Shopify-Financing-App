import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField,
  } from '@shopify/polaris';
  
  class AnnotatedLayout extends React.Component {
    state = {
      interest: '10%',
      period: 4,
      frequency: 1
    };
  
    render() {
      const { interest } = this.state;
      const { period } = this.state;
      const { frequency } = this.state;
  
      return (
        <Page>
            <Form onSubmit={this.handleSubmit}>
                <Layout>
                    <Layout.AnnotatedSection
                    title="Default interest rate"
                    description="This interest rate will be used to calculate the payments of your purchase."
                    >
                        <Card sectioned>
                            <TextField
                                value={interest}
                                onChange={this.handleChange('interest')}
                                label="Interest rate"
                                type="interest"
                            />
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection
                    title="Default financing period"
                    description="This financing period is the length of the reimboursment period. (in years)"
                    >
                        <Card sectioned>
                            <TextField
                            value={period}
                            onChange={this.handleChange('period')}
                            label="Payback period"
                            type="period"
                            />
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection
                    title="Default payment frequency"
                    description="This payment frequency is the number of payments for each year"
                    >
                        <Card sectioned>
                            <TextField
                            value={frequency}
                            onChange={this.handleChange('frequency')}
                            label="Payment frequency"
                            type="frequency"
                            />
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
                <Stack distribution="trailing">
                    <Button primary submit>
                    Save
                    </Button>
                </Stack>
            </Form>
        </Page>
      );
    }
  
    handleSubmit = () => {
      this.setState({
        interest: this.state.interest,
        period: this.state.period,
        frequency: this.state.frequency
      });
      console.log('submission', this.state);
    };
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };
  }
  
  export default AnnotatedLayout;