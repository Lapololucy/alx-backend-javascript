const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the exact output', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber');

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calledOnce).to.be.true;

    expect(spy.calledWith('The total is: 10')).to.be.true;
    expect(spy.calledOnce).to.be.true;

    stub.restore();
    spy.restore();
  });
});
