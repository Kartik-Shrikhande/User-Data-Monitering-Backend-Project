const contactModel = require('../model/contactModel');
const { validEmail,validPhone} = require('../validations/validators');


const userData = async (req, res) => {
    try {
        const { email, phoneNumber } = req.body;
        if(!validEmail(email)) return res.status(400).send({ status: false, message: 'Enter Valid Email'})
        if(!validPhone(phoneNumber)) return res.status(400).send({ status: false, message: 'Enter Valid phoneNumber, it should be in Numeric form'})

        // Query the database to check if a contact with the provided email or phoneNumber exists
        let contact = await contactModel.findOne({ $or: [{ email }, { phoneNumber }] });

        // If no contact exists, create a new primary contact
        if (!contact) {
            contact = {
                email,
                phoneNumber,
                linkPrecedence: 'primary'
            }

            const newContact = await contactModel.create(contact)
            return res.status(201).send({
                data: {
                    primaryContactId: newContact._id,
                    emails: [newContact.email],
                    phoneNumbers: [newContact.phoneNumber],
                    secondaryContactIds: [],
                }
            })
        }

        // If a contact exists, create a new secondary contact and link them
        const secondaryContact = {
            email,
            phoneNumber,
            linkPrecedence: 'secondary',
            linkedId: contact._id,
        };
        await contactModel.create(secondaryContact);

        // Find all linked contacts and construct the response
        const linkedContacts = await contactModel.find({ linkedId: contact._id })
        const emails = [contact.email, ...linkedContacts.map((c) => c.email)]
        const phoneNumbers = [contact.phoneNumber, ...linkedContacts.map((c) => c.phoneNumber)]
        const secondaryContactIds = linkedContacts.map((c) => c._id)

        return res.status(200).send({
            contact: {
                primaryContactId: contact._id,
                emails,
                phoneNumbers,
                secondaryContactIds
            }
        })
    } catch (error) {
        return res.status(500).send({ status: false, error: 'Internal Server Error' })
    }
}


module.exports = { userData }