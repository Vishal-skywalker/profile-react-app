import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { sendMessage } from '../lib/SalesforceService';

export default function MessageDrop() {
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });

	const toggleModal = () => setIsOpen(!isOpen);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.name && formData.email && formData.message) {
			try {
				await sendMessage(formData);
				toast.success('Message sent successfully!');
				setFormData({ name: '', email: '', message: '' });
				setIsOpen(false);
			} catch (error) {
				toast.error('Failed to send message. Please try again.');
			}
		}
	};

	return (
		<div className="fixed bottom-4 right-4 z-50">
			<Toaster position="top-center" reverseOrder={false} />
			<button
				className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
				onClick={toggleModal}
				aria-label="Open chat"
			>
				Ping Me!
			</button>

			{isOpen && (
				<div className="fixed bottom-4 right-4 left-4 md:right-4 md:left-auto w-auto md:w-80 max-w-full p-4 bg-white shadow-2xl shadow-gray-500 rounded-2xl border border-gray-200">
					<div className="flex justify-between mb-4">
						<h2 className="text-lg font-bold">Drop a message</h2>
						<button
							className="text-gray-500 text-sm hover:text-gray-700 focus:outline-none"
							onClick={toggleModal}
						>
							Close
						</button>
					</div>
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={formData.name}
							onChange={handleChange}
							className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							required
						/>
						<textarea
							name="message"
							placeholder="Message"
							value={formData.message}
							onChange={handleChange}
							className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							rows="4"
							required
						></textarea>
						<button
							type="submit"
							className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Send Message
						</button>
					</form>
				</div>
			)}
		</div>
	);
}