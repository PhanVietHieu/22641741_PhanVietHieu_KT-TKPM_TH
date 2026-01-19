package iuh.fit.se.payment;

import org.springframework.stereotype.Component;

@Component
public class PaymentConfig {

    private final String currency = "VND";

    public String getCurrency() {
        return currency;
    }
}
