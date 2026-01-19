package iuh.fit.se.payment;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class PaymentFactory {

    private final Map<String, Payment> payments;

    public PaymentFactory(List<Payment> list) {
        payments = new HashMap<>();
        for (Payment p : list) {
            payments.put(
                    p.getClass().getAnnotation(Component.class).value(), p
            );
        }
    }

    public Payment getPayment(String type) {
        return payments.get(type);
    }
}
