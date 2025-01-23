// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRtzFIQm8eav8ygZvOyS8LiPGfxuGyjmk",
  authDomain: "rienglish.firebaseapp.com",
  projectId: "rienglish",
  storageBucket: "rienglish.firebasestorage.app",
  messagingSenderId: "87731746835",
  appId: "1:87731746835:web:85f430b91ae5d841f9a7e6",
  measurementId: "G-5331QHBDZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const lessons = {
    1: `
        <h1>Chức Năng và Trật Tự Từ trong Câu Tiếng Anh</h1>
<p>Chức năng và trật tự từ trong câu là một trong những nguyên tắc cơ bản của ngữ pháp tiếng Anh, nhằm đảm bảo rằng các từ trong câu được sắp xếp một cách hợp lý, giúp truyền đạt ý nghĩa chính xác và dễ hiểu. Tiếng Anh là ngôn ngữ phân tích, không phụ thuộc nhiều vào sự biến đổi hình thái từ như tiếng Việt, vì vậy vị trí của từ trong câu đóng vai trò rất quan trọng trong việc xác định ý nghĩa.</p>

<h2>1. Khái niệm "Chức năng từ" trong câu</h2>
<p>Trong một câu tiếng Anh, mỗi từ hoặc cụm từ đều có chức năng cụ thể, đóng góp vào việc hình thành nghĩa chung của câu. Những chức năng chính bao gồm:</p>
<ul>
<li>
    <strong>Chủ ngữ (Subject):</strong> Là người, vật, hoặc sự việc thực hiện hành động hoặc được đề cập đến trong câu.
    <br>Ví dụ: <code>The cat sleeps.</code> (Con mèo đang ngủ.)
</li>
<li>
    <strong>Động từ (Verb):</strong> Biểu thị hành động, trạng thái hoặc hiện tượng trong câu.
    <br>Ví dụ: <code>The cat sleeps.</code> (Con mèo đang ngủ.)
</li>
<li>
    <strong>Tân ngữ (Object):</strong> Là người, vật, hoặc sự việc bị tác động bởi hành động của chủ ngữ.
    <br>Ví dụ: <code>She reads a book.</code> (Cô ấy đọc một quyển sách.)
</li>
<li>
    <strong>Bổ ngữ (Complement):</strong> Cung cấp thêm thông tin để làm rõ chủ ngữ hoặc tân ngữ, thường đi kèm với các động từ nối (linking verbs).
    <br>Ví dụ: <code>She is happy.</code> (Cô ấy vui vẻ.)
</li>
<li>
    <strong>Trạng ngữ (Adjunct):</strong> Bổ sung thông tin về thời gian, địa điểm, cách thức, lý do, hoặc tần suất hành động.
    <br>Ví dụ: <code>She sings beautifully.</code> (Cô ấy hát rất hay.)
</li>
</ul>

<h2>2. Khái niệm "Trật tự từ"</h2>
<p><strong>Trật tự từ (Word Order)</strong> trong tiếng Anh là cách sắp xếp các thành phần trong câu theo một thứ tự cố định. Khác với tiếng Việt, trật tự từ trong tiếng Anh không thể thay đổi tự do mà phải tuân theo các quy tắc để đảm bảo ý nghĩa.</p>

<h3>2.1. Trật tự từ cơ bản</h3>
<p>Công thức phổ biến nhất: <code>S + V + O + C + A</code></p>
<ul>
<li><strong>S (Subject):</strong> Đứng đầu câu, xác định ai hoặc cái gì đang hành động.</li>
<li><strong>V (Verb):</strong> Theo ngay sau chủ ngữ, mô tả hành động hoặc trạng thái.</li>
<li><strong>O (Object):</strong> Nếu có, thường đứng sau động từ.</li>
<li><strong>C (Complement):</strong> Là thông tin bổ sung về chủ ngữ hoặc tân ngữ.</li>
<li><strong>A (Adjunct):</strong> Thường đứng cuối câu, thêm chi tiết về bối cảnh.</li>
</ul>
<p>Ví dụ:</p>
<p><code>The student (S) writes (V) an essay (O) carefully (A).</code></p>
<p>(Học sinh viết bài luận một cách cẩn thận.)</p>

<h3>2.2. Các loại trật tự từ khác</h3>
<ul>
<li><strong>Câu hỏi (Questions):</strong> Đưa trợ động từ hoặc từ để hỏi lên đầu câu.
    <br>Ví dụ: <code>Do you like apples?</code> (Bạn có thích táo không?)
</li>
<li><strong>Câu phủ định (Negative Sentences):</strong> Thêm “not” sau trợ động từ.
    <br>Ví dụ: <code>She does not play piano.</code> (Cô ấy không chơi đàn piano.)
</li>
<li><strong>Câu đảo ngữ (Inversion):</strong> Đảo vị trí động từ và chủ ngữ để nhấn mạnh.
    <br>Ví dụ: <code>Never have I seen such beauty.</code> (Chưa bao giờ tôi thấy vẻ đẹp như vậy.)
</li>
</ul>

<h2>3. Ý nghĩa và vai trò của trật tự từ</h2>
<ul>
<li><strong>Tính chính xác:</strong> Giúp truyền đạt ý nghĩa rõ ràng, tránh gây hiểu lầm.</li>
<li><strong>Tính nhấn mạnh:</strong> Một số trật tự từ đặc biệt dùng để tạo hiệu ứng mạnh mẽ hoặc nhấn mạnh ý quan trọng.</li>
<li><strong>Tính liên kết:</strong> Câu tiếng Anh có trật tự từ chặt chẽ giúp người nghe hoặc đọc dễ dàng nắm bắt thông tin.</li>
</ul>

<h2>4. Ví dụ chi tiết hơn về các cấu trúc</h2>
<ul>
<li><strong>4.1. Cấu trúc S + V + O:</strong> <code>I (S) eat (V) apples (O).</code> (Tôi ăn táo.)</li>
<li><strong>4.2. Cấu trúc S + V + C:</strong> <code>She (S) is (V) a teacher (C).</code> (Cô ấy là giáo viên.)</li>
<li><strong>4.3. Cấu trúc S + V + O + A:</strong> <code>They (S) play (V) football (O) every afternoon (A).</code> (Họ chơi bóng đá mỗi buổi chiều.)</li>
<li><strong>4.4. Câu hỏi Yes/No:</strong> <code>Did she (S) finish (V) the homework (O)?</code> (Cô ấy đã hoàn thành bài tập chưa?)</li>
<li><strong>4.5. Câu đảo ngữ:</strong> <code>Rarely do I meet such kind people.</code> (Hiếm khi tôi gặp những người tốt bụng như vậy.)</li>
</ul>

<h2>5. Các nguyên tắc quan trọng cần nhớ</h2>
<ul>
<li><strong>Không thay đổi trật tự các thành phần chính:</strong> Trong câu khẳng định, thứ tự <code>S + V + O</code> là cố định.</li>
<li><strong>Đặt trạng từ đúng chỗ:</strong> Trạng từ chỉ cách thức, thời gian, địa điểm phải phù hợp với vị trí trong câu.</li>
<li><strong>Tuân thủ thứ tự tính từ:</strong> Sử dụng công thức <em>Opinion - Size - Age - Shape - Color - Origin - Material - Purpose</em>.</li>
<li><strong>Luôn thêm trợ động từ trong câu hỏi và phủ định:</strong>
    <br>Sai: <code>She like apples?</code>
    <br>Đúng: <code>Does she like apples?</code>
</li>
</ul>

<h2>6. Tóm lại</h2>
<p>Chức năng và trật tự từ trong tiếng Anh là nền tảng quan trọng để học ngữ pháp hiệu quả. Hiểu rõ các quy tắc này giúp bạn không chỉ viết và nói đúng mà còn tăng cường khả năng diễn đạt rõ ràng, tự nhiên hơn trong mọi ngữ cảnh.</p>`,

    2:`<h1>Phân Loại Câu Trong Tiếng Anh</h1>
<p>Trong tiếng Anh, câu được phân loại dựa trên <strong>chức năng (function)</strong> và <strong>cấu trúc (structure)</strong>. Mỗi loại câu có vai trò, đặc điểm và cách sử dụng riêng, phù hợp với các mục đích giao tiếp khác nhau như cung cấp thông tin, diễn đạt cảm xúc, đưa ra đề xuất, hoặc yêu cầu thông tin. Dưới đây là chi tiết về các loại câu phổ biến, bao gồm định nghĩa, cấu trúc, dấu hiệu nhận biết, và ví dụ minh họa.</p>

<h2>I. Phân Loại Theo Chức Năng</h2>

<h3>1. Câu Khẳng Định (Affirmative Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu dùng để khẳng định hoặc cung cấp thông tin, diễn đạt một ý kiến, suy nghĩ, hoặc sự thật.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + Verb + Object/Complement.</blockquote>
<p><strong>Dấu hiệu:</strong> Không có từ phủ định như <em>not</em> hoặc từ mang ý nghĩa phủ định.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>She loves reading.</code> (Cô ấy thích đọc sách.)</li>
<li><code>They are engineers.</code> (Họ là kỹ sư.)</li>
<li><code>The sun rises in the east.</code> (Mặt trời mọc ở hướng đông.)</li>
</ul>

<h3>2. Câu Phủ Định (Negative Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu dùng để phủ nhận hoặc bác bỏ một ý kiến, hành động, hoặc trạng thái.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>
Với động từ thường: <code>Subject + do/does/did + not + Verb.</code><br>
Với động từ "to be": <code>Subject + to be + not + Complement.</code>
</blockquote>
<p><strong>Dấu hiệu:</strong> Sử dụng từ phủ định như <em>not, never, nobody, no one.</em></p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>I do not like chocolate.</code> (Tôi không thích sô cô la.)</li>
<li><code>She is not at home.</code> (Cô ấy không có ở nhà.)</li>
<li><code>They never play soccer.</code> (Họ không bao giờ chơi bóng đá.)</li>
</ul>

<h3>3. Câu Gợi Ý (Suggestive Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu được sử dụng để đưa ra đề xuất hoặc lời khuyên một cách nhẹ nhàng, mang tính gợi ý.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>
<code>Let’s + Verb.</code><br>
<code>Why don’t we + Verb?</code>
</blockquote>
<p><strong>Dấu hiệu:</strong> Thường bắt đầu bằng các cụm từ gợi ý như <em>Let’s</em>, <em>Shall we</em>, hoặc <em>Why don’t we</em>.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Let’s have dinner together.</code> (Hãy cùng ăn tối nhé.)</li>
<li><code>Why don’t we visit the museum this weekend?</code> (Sao chúng ta không đi thăm bảo tàng vào cuối tuần này nhỉ?)</li>
</ul>

<h3>4. Câu Chẻ (Cleft Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu được chia thành hai phần để nhấn mạnh một yếu tố cụ thể trong câu.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>It is/was + [thành phần nhấn mạnh] + that/who + phần còn lại.</blockquote>
<p><strong>Dấu hiệu:</strong> Cấu trúc "It is/was" xuất hiện để nhấn mạnh.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>It is the teacher who inspires me.</code> (Chính giáo viên là người truyền cảm hứng cho tôi.)</li>
<li><code>It was on Monday that she called.</code> (Chính vào thứ Hai cô ấy đã gọi.)</li>
</ul>

<h3>5. Câu Giả Định (Subjunctive Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu diễn tả một điều kiện không có thực, một mong muốn, hoặc một tình huống giả định.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>
<code>If + Subject + were + Complement, Subject + would/could + Verb.</code><br>
<code>Subject + wish(es) + that + Subject + were/could + Verb.</code>
</blockquote>
<p><strong>Dấu hiệu:</strong> Chứa các từ như <em>wish</em>, <em>if</em>, <em>would</em>, <em>could</em>, <em>were</em>.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>If I were rich, I would travel the world.</code> (Nếu tôi giàu, tôi sẽ đi du lịch khắp thế giới.)</li>
<li><code>She wishes she could sing better.</code> (Cô ấy ước mình có thể hát hay hơn.)</li>
</ul>

<h3>6. Câu Trần Thuật (Declarative Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu được sử dụng để cung cấp thông tin, ý kiến, hoặc tường thuật một sự việc.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + Verb + Object/Complement.</blockquote>
<p><strong>Dấu hiệu:</strong> Kết thúc bằng dấu chấm (".").</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>He is a doctor.</code> (Anh ấy là một bác sĩ.)</li>
<li><code>The book is on the table.</code> (Quyển sách ở trên bàn.)</li>
</ul>

<!-- Add more sections for other sentence types as needed -->

<h2>II. Phân Loại Theo Cấu Trúc</h2>
<h3>1. Câu Đơn (Simple Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu chỉ có một mệnh đề độc lập, diễn đạt một ý hoàn chỉnh.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + Verb + Object/Complement.</blockquote>
<p><strong>Dấu hiệu:</strong> Không có mệnh đề phụ thuộc.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>She likes ice cream.</code> (Cô ấy thích kem.)</li>
</ul>

<h3>2. Câu Ghép (Compound Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu gồm hai hoặc nhiều mệnh đề độc lập, được liên kết bằng liên từ (<em>and, but, or, so</em>).</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Clause 1 + Conjunction + Clause 2.</blockquote>
<p><strong>Dấu hiệu:</strong> Có liên từ nối các mệnh đề.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>I wanted to go out, but it started to rain.</code> (Tôi muốn ra ngoài, nhưng trời bắt đầu mưa.)</li>
</ul>

<h3>3. Câu Phức (Complex Sentence)</h3>
<p><strong>Định nghĩa:</strong> Là câu gồm một mệnh đề độc lập và một hoặc nhiều mệnh đề phụ thuộc.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Main Clause + Subordinating Conjunction + Subordinate Clause.</blockquote>
<p><strong>Dấu hiệu:</strong> Chứa từ nối phụ thuộc như <em>because</em>, <em>although</em>, <em>if</em>, <em>when</em>.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>She stayed at home because it was raining.</code> (Cô ấy ở nhà vì trời đang mưa.)</li>
</ul>

<h2>III. Tổng Kết</h2>
<p>Các loại câu trong tiếng Anh giúp bạn diễn đạt ý tưởng, cảm xúc và ý kiến với nhiều mục đích khác nhau. Hiểu rõ định nghĩa, cấu trúc và cách sử dụng từng loại câu sẽ giúp bạn giao tiếp hiệu quả, diễn đạt chính xác trong cả văn nói và văn viết.</p>`,

     3:`
     <h1>Cấu Trúc Câu Nghi Vấn</h1>
<p>Câu nghi vấn (Interrogative Sentence) là dạng câu được sử dụng để hỏi hoặc yêu cầu thông tin. Trong tiếng Anh, câu nghi vấn có cấu trúc và trật tự từ đặc biệt, thường bắt đầu với trợ động từ, từ để hỏi (WH-words), hoặc đảo ngữ.</p>

<h2>1. Phân Loại Câu Nghi Vấn</h2>

<h3>1.1. Câu hỏi Yes/No (Yes/No Questions)</h3>
<p>Đây là dạng câu hỏi có thể trả lời bằng "Yes" (Có) hoặc "No" (Không).</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Auxiliary Verb (Trợ động từ) + Subject (Chủ ngữ) + Main Verb (Động từ chính) + Object/Complement (Tân ngữ/Bổ ngữ)?</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Do you like coffee?</code> (Bạn có thích cà phê không?) → Yes, I do. / No, I don’t.</li>
<li><code>Is she a doctor?</code> (Cô ấy có phải là bác sĩ không?) → Yes, she is. / No, she isn’t.</li>
</ul>

<h3>1.2. Câu hỏi WH- (WH- Questions)</h3>
<p>Câu hỏi WH- bắt đầu bằng một từ để hỏi (what, where, when, why, who, which, how). Mục đích là yêu cầu thông tin cụ thể.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>WH-Word + Auxiliary Verb + Subject + Main Verb + Object/Complement?</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>What do you want?</code> (Bạn muốn gì?) → I want a book.</li>
<li><code>Where are you going?</code> (Bạn đang đi đâu?) → I’m going to the park.</li>
<li><code>Why is she sad?</code> (Tại sao cô ấy buồn?) → Because she lost her job.</li>
</ul>

<h3>1.3. Câu hỏi đuôi (Tag Questions)</h3>
<p>Đây là câu hỏi được thêm vào cuối câu khẳng định hoặc phủ định để xác nhận hoặc kiểm tra thông tin.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Statement (Mệnh đề chính), Auxiliary Verb (Trợ động từ) + Pronoun (Đại từ)?</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>You are coming, aren’t you?</code> (Bạn sẽ đến, phải không?)</li>
<li><code>She doesn’t eat meat, does she?</code> (Cô ấy không ăn thịt, đúng không?)</li>
</ul>

<h3>1.4. Câu hỏi lựa chọn (Choice Questions)</h3>
<p>Câu hỏi yêu cầu người trả lời chọn giữa hai hoặc nhiều tùy chọn.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Auxiliary Verb + Subject + Main Verb + Option A or Option B?</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Do you want tea or coffee?</code> (Bạn muốn trà hay cà phê?) → I want coffee.</li>
<li><code>Will you go by car or train?</code> (Bạn sẽ đi bằng xe hơi hay tàu hỏa?) → I’ll go by car.</li>
</ul>

<h3>1.5. Câu hỏi gián tiếp (Indirect Questions)</h3>
<p>Đây là câu hỏi lịch sự hoặc không trực tiếp, thường dùng trong văn phong trang trọng.</p>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Introductory Phrase + WH-Word/Auxiliary Verb + Subject + Main Verb.</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Can you tell me where she is?</code> (Bạn có thể nói cho tôi biết cô ấy ở đâu không?)</li>
<li><code>I wonder if he likes football.</code> (Tôi tự hỏi liệu anh ấy có thích bóng đá không.)</li>
</ul>

<h2>2. Các Trợ Động Từ Thường Dùng trong Câu Nghi Vấn</h2>
<ul>
<li><strong>Do/Does/Did:</strong> Dùng trong thì hiện tại đơn hoặc quá khứ đơn.
    <br>Ví dụ: <code>Do you speak English?</code> <code>Did he finish his homework?</code>
</li>
<li><strong>Is/Are/Was/Were:</strong> Dùng với động từ “to be” hoặc thì tiếp diễn.
    <br>Ví dụ: <code>Is she coming?</code> <code>Were they happy?</code>
</li>
<li><strong>Can/Could/May/Might/Will/Would/Should:</strong> Dùng để hỏi về khả năng, ý kiến, hoặc lời đề nghị.
    <br>Ví dụ: <code>Can I help you?</code> <code>Will you join us?</code>
</li>
</ul>

<h2>3. Cách Hình Thành Câu Nghi Vấn</h2>

<h3>3.1. Với động từ “to be”</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>To be + Subject + Complement?</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Are you a teacher?</code> (Bạn có phải là giáo viên không?)</li>
<li><code>Was she at the party?</code> (Cô ấy đã ở bữa tiệc chứ?)</li>
</ul>

<h3>3.2. Với động từ thường</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Do/Does/Did + Subject + Base Verb?</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Does he like music?</code> (Anh ấy có thích nhạc không?)</li>
<li><code>Did you finish the report?</code> (Bạn đã hoàn thành báo cáo chưa?)</li>
</ul>

<h3>3.3. Với động từ khiếm khuyết (Modal Verbs)</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Modal Verb + Subject + Base Verb?</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Can you swim?</code> (Bạn có biết bơi không?)</li>
<li><code>Should we leave now?</code> (Chúng ta nên rời đi bây giờ không?)</li>
</ul>

<h2>4. Một Số Lưu Ý Quan Trọng</h2>
<ul>
<li><strong>Thứ tự từ đặc biệt:</strong> Trong câu nghi vấn, trợ động từ luôn đứng trước chủ ngữ.
    <br>Ví dụ: <code>Are you ready?</code> (Bạn sẵn sàng chưa?)
</li>
<li><strong>WH-Word phù hợp với thông tin cần hỏi:</strong>
    <ul>
        <li><strong>What:</strong> Hỏi về cái gì.</li>
        <li><strong>Where:</strong> Hỏi về địa điểm.</li>
        <li><strong>When:</strong> Hỏi về thời gian.</li>
        <li><strong>Why:</strong> Hỏi về lý do.</li>
        <li><strong>Who:</strong> Hỏi về người.</li>
        <li><strong>How:</strong> Hỏi về cách thức.</li>
    </ul>
</li>
<li><strong>Chú ý trợ động từ phù hợp với thì và chủ ngữ:</strong>
    <ul>
        <li><strong>Hiện tại:</strong> Do/Does</li>
        <li><strong>Quá khứ:</strong> Did</li>
    </ul>
</li>
</ul>

<h2>5. Ví Dụ Minh Họa Chi Tiết</h2>
<ul>
<li><strong>Câu hỏi Yes/No:</strong>
    <br><code>Are you happy?</code> (Bạn có vui không?) → Yes, I am. / No, I’m not.
</li>
<li><strong>Câu hỏi WH-:</strong>
    <br><code>Why are you late?</code> (Tại sao bạn đến muộn?) → Because the bus was late.
</li>
<li><strong>Câu hỏi đuôi:</strong>
    <br><code>It’s a nice day, isn’t it?</code> (Hôm nay là một ngày đẹp trời, phải không?) → Yes, it is.
</li>
<li><strong>Câu hỏi lựa chọn:</strong>
    <br><code>Do you want pizza or pasta?</code> (Bạn muốn ăn pizza hay mì ống?) → I want pizza.
</li>
<li><strong>Câu hỏi gián tiếp:</strong>
    <br><code>Could you tell me what time it is?</code> (Bạn có thể nói cho tôi biết mấy giờ rồi không?) → It’s 3 PM.
</li>
</ul>

<h2>6. Tổng Kết</h2>
<p>Câu nghi vấn là một phần quan trọng của ngữ pháp tiếng Anh, được sử dụng để giao tiếp hiệu quả và yêu cầu thông tin. Việc hiểu rõ các loại câu hỏi, cấu trúc, và cách sử dụng sẽ giúp bạn diễn đạt chính xác và linh hoạt trong mọi tình huống giao tiếp.</p>`,

        4:`
        <h1>Câu Khẳng Định (Affirmative Sentence)</h1>
<p>Câu khẳng định là một dạng câu cơ bản trong tiếng Anh, được sử dụng để trình bày thông tin, ý kiến, hoặc suy nghĩ một cách rõ ràng và trực tiếp. Đây là loại câu phổ biến nhất trong giao tiếp và viết.</p>

<h2>1. Định Nghĩa</h2>
<p><strong>Câu khẳng định (Affirmative Sentence):</strong> Là câu dùng để khẳng định hoặc cung cấp thông tin, diễn đạt một ý kiến, trạng thái, hoặc hành động một cách chắc chắn.</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Truyền đạt thông tin.</li>
<li>Bày tỏ ý kiến hoặc sự thật.</li>
<li>Diễn tả các hành động hoặc sự kiện.</li>
</ul>

<h2>2. Cấu Trúc</h2>
<p>Câu khẳng định thường tuân theo trật tự từ cơ bản của tiếng Anh:</p>
<blockquote>Subject (Chủ ngữ) + Verb (Động từ) + Object/Complement (Tân ngữ/Bổ ngữ).</blockquote>

<h3>2.1. Câu khẳng định với động từ "to be"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + to be (am/is/are/was/were) + Complement.</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>She is a teacher.</code> (Cô ấy là một giáo viên.)</li>
<li><code>They are happy.</code> (Họ đang vui vẻ.)</li>
</ul>

<h3>2.2. Câu khẳng định với động từ thường</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + Verb + Object.</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>He likes pizza.</code> (Anh ấy thích pizza.)</li>
<li><code>They play soccer every day.</code> (Họ chơi bóng đá mỗi ngày.)</li>
</ul>

<h3>2.3. Câu khẳng định với thì hoàn thành</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + have/has/had + Past Participle (Quá khứ phân từ).</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>I have finished my homework.</code> (Tôi đã hoàn thành bài tập về nhà.)</li>
<li><code>She has visited Paris twice.</code> (Cô ấy đã đến Paris hai lần.)</li>
</ul>

<h3>2.4. Câu khẳng định với động từ khuyết thiếu</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + Modal Verb + Verb (nguyên mẫu).</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>You should study harder.</code> (Bạn nên học chăm chỉ hơn.)</li>
<li><code>We can swim.</code> (Chúng tôi có thể bơi.)</li>
</ul>

<h2>3. Dấu Hiệu Nhận Biết</h2>
<ul>
<li><strong>Không có từ phủ định:</strong> Câu khẳng định không chứa các từ như <em>not</em>, <em>never</em>, <em>no one</em>, <em>nobody</em>, <em>nothing</em>.</li>
<li><strong>Ý nghĩa khẳng định rõ ràng:</strong> Diễn tả thông tin hoặc hành động một cách trực tiếp, không phủ nhận hay nghi vấn.</li>
<li><strong>Trợ động từ ở dạng khẳng định:</strong> Trong câu khẳng định có trợ động từ như <em>do</em>, <em>does</em>, <em>did</em>, chúng sẽ không đi kèm <em>not</em>.</li>
</ul>

<h2>4. Vai Trò</h2>
<ul>
<li><strong>Giao tiếp hằng ngày:</strong> Câu khẳng định được dùng để chia sẻ thông tin trong các tình huống giao tiếp thông thường.</li>
<li><strong>Viết văn bản:</strong> Là dạng câu chính trong các tài liệu viết như bài luận, báo cáo, hoặc thư từ.</li>
<li><strong>Biểu đạt cảm xúc:</strong> Thể hiện cảm xúc hoặc ý kiến của người nói.</li>
</ul>

<h2>5. Ví Dụ Minh Họa</h2>
<h3>5.1. Với động từ "to be":</h3>
<ul>
<li><code>She is beautiful.</code> (Cô ấy đẹp.)</li>
<li><code>They were tired after the trip.</code> (Họ đã mệt sau chuyến đi.)</li>
</ul>

<h3>5.2. Với động từ thường:</h3>
<ul>
<li><code>He studies English every morning.</code> (Anh ấy học tiếng Anh mỗi sáng.)</li>
<li><code>We love playing football.</code> (Chúng tôi thích chơi bóng đá.)</li>
</ul>

<h3>5.3. Với thì hoàn thành:</h3>
<ul>
<li><code>I have seen that movie.</code> (Tôi đã xem bộ phim đó.)</li>
<li><code>They have been to Japan.</code> (Họ đã từng đến Nhật Bản.)</li>
</ul>

<h3>5.4. Với động từ khuyết thiếu:</h3>
<ul>
<li><code>You must finish your homework.</code> (Bạn phải hoàn thành bài tập về nhà.)</li>
<li><code>We should go now.</code> (Chúng ta nên đi ngay bây giờ.)</li>
</ul>

<h2>6. Lưu Ý</h2>
<ul>
<li><strong>Trật tự từ:</strong> Cần tuân thủ đúng trật tự từ trong câu khẳng định (<code>Subject + Verb + Object</code>).</li>
<li><strong>Thì của câu:</strong> Chọn thì phù hợp với ngữ cảnh giao tiếp.</li>
<li><strong>Không nhầm lẫn:</strong> Câu khẳng định không chứa các từ phủ định hoặc từ nghi vấn.</li>
</ul>

<h2>7. Tổng Kết</h2>
<p>Câu khẳng định là nền tảng của ngữ pháp tiếng Anh, được sử dụng để cung cấp thông tin một cách trực tiếp và rõ ràng. Hiểu cách cấu tạo và sử dụng câu khẳng định sẽ giúp bạn diễn đạt ý tưởng chính xác trong giao tiếp và viết lách.</p>`,
5:`<h1>Câu Phủ Định (Negative Sentence)</h1>
<p>Câu phủ định là một dạng câu cơ bản trong tiếng Anh, được sử dụng để diễn tả sự phủ nhận hoặc bác bỏ một ý kiến, hành động, trạng thái, hoặc sự việc. Đây là loại câu quan trọng trong giao tiếp và viết, giúp người nói hoặc người viết biểu đạt rõ ràng ý nghĩa đối lập với câu khẳng định.</p>

<h2>1. Định Nghĩa</h2>
<p><strong>Câu phủ định (Negative Sentence):</strong> Là câu diễn đạt ý nghĩa phủ định hoặc bác bỏ một hành động, sự kiện, trạng thái hoặc ý kiến.</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Bác bỏ hoặc phủ nhận một sự thật.</li>
<li>Thể hiện rằng một hành động, trạng thái, hoặc sự kiện không xảy ra.</li>
<li>Đưa ra ý kiến trái ngược.</li>
</ul>

<h2>2. Cấu Trúc</h2>
<p>Câu phủ định trong tiếng Anh thường được tạo bằng cách thêm từ phủ định như <em>not, never, no, nobody, nothing</em> vào câu khẳng định.</p>

<h3>2.1. Với động từ "to be"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + to be (am/is/are/was/were) + not + Complement.</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>She is not happy.</code> (Cô ấy không vui.)</li>
<li><code>They were not at school yesterday.</code> (Họ đã không ở trường ngày hôm qua.)</li>
</ul>

<h3>2.2. Với động từ thường</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + do/does/did + not + Base Verb.</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>I do not like coffee.</code> (Tôi không thích cà phê.)</li>
<li><code>She does not play the piano.</code> (Cô ấy không chơi đàn piano.)</li>
</ul>

<h3>2.3. Với thì hoàn thành</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + have/has/had + not + Past Participle.</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>I have not finished my homework.</code> (Tôi chưa hoàn thành bài tập về nhà.)</li>
<li><code>She has not visited Paris.</code> (Cô ấy chưa đến Paris.)</li>
</ul>

<h3>2.4. Với động từ khuyết thiếu (Modal Verbs)</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + Modal Verb + not + Base Verb.</blockquote>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>You should not eat too much.</code> (Bạn không nên ăn quá nhiều.)</li>
<li><code>We cannot swim.</code> (Chúng tôi không thể bơi.)</li>
</ul>

<h3>2.5. Câu phủ định với từ phủ định khác</h3>
<p>Các từ phủ định như <em>never, nobody, nothing, no</em> thường thay thế từ <em>not</em> trong câu.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>She never eats meat.</code> (Cô ấy không bao giờ ăn thịt.)</li>
<li><code>Nobody knows the truth.</code> (Không ai biết sự thật.)</li>
</ul>

<h2>3. Dấu Hiệu Nhận Biết</h2>
<ul>
<li><strong>Từ phủ định:</strong> Các từ như <em>not, never, no, nobody, nothing, nowhere</em> xuất hiện trong câu.</li>
<li><strong>Trợ động từ mang nghĩa phủ định:</strong> Các trợ động từ như <em>do not, does not, did not, cannot</em> được sử dụng trong câu.</li>
<li><strong>Ý nghĩa đối lập với câu khẳng định:</strong> Câu phủ định thể hiện một ý nghĩa trái ngược với câu khẳng định.</li>
</ul>

<h2>4. Vai Trò</h2>
<ul>
<li><strong>Biểu đạt sự phủ nhận:</strong> Dùng để bác bỏ một thông tin, ý kiến, hoặc sự thật.
    <br>Ví dụ: <code>I am not a doctor.</code> (Tôi không phải là bác sĩ.)
</li>
<li><strong>Giúp làm rõ nghĩa:</strong> Câu phủ định làm rõ rằng một hành động hoặc trạng thái không xảy ra.
    <br>Ví dụ: <code>She does not work here.</code> (Cô ấy không làm việc ở đây.)
</li>
<li><strong>Dùng trong giao tiếp hằng ngày:</strong> Câu phủ định rất quan trọng trong các cuộc trò chuyện hoặc thảo luận để thể hiện quan điểm.</li>
</ul>

<h2>5. Ví Dụ Minh Họa</h2>
<h3>5.1. Với động từ "to be":</h3>
<ul>
<li><code>He is not a teacher.</code> (Anh ấy không phải là giáo viên.)</li>
<li><code>They are not tired.</code> (Họ không mệt.)</li>
</ul>

<h3>5.2. Với động từ thường:</h3>
<ul>
<li><code>I do not like apples.</code> (Tôi không thích táo.)</li>
<li><code>She does not read books.</code> (Cô ấy không đọc sách.)</li>
</ul>

<h3>5.3. Với thì hoàn thành:</h3>
<ul>
<li><code>We have not seen that movie.</code> (Chúng tôi chưa xem bộ phim đó.)</li>
<li><code>He had not arrived before 10 PM.</code> (Anh ấy chưa đến trước 10 giờ tối.)</li>
</ul>

<h3>5.4. Với động từ khuyết thiếu:</h3>
<ul>
<li><code>You must not smoke here.</code> (Bạn không được hút thuốc ở đây.)</li>
<li><code>They cannot play the guitar.</code> (Họ không thể chơi đàn guitar.)</li>
</ul>

<h3>5.5. Với từ phủ định khác:</h3>
<ul>
<li><code>Nobody answered the phone.</code> (Không ai trả lời điện thoại.)</li>
<li><code>She never goes out at night.</code> (Cô ấy không bao giờ ra ngoài vào ban đêm.)</li>
</ul>

<h2>6. Lưu Ý</h2>
<ul>
<li><strong>Cách dùng từ phủ định:</strong>
    <ul>
        <li>Không sử dụng hai từ phủ định trong cùng một câu (<em>double negative</em>).</li>
        <li><strong>Sai:</strong> <code>I don’t need no help.</code> (Tôi không cần không có sự giúp đỡ.)</li>
        <li><strong>Đúng:</strong> <code>I don’t need any help.</code> (Tôi không cần sự giúp đỡ.)</li>
    </ul>
</li>
<li><strong>Thì của câu phủ định:</strong> Trợ động từ và dạng phủ định cần phù hợp với thì của câu.</li>
<li><strong>Từ phủ định thay thế:</strong> Sử dụng từ như <em>never, nobody, no one</em> khi muốn tránh dùng <em>not</em>.</li>
</ul>

<h2>7. Tổng Kết</h2>
<p>Câu phủ định đóng vai trò quan trọng trong ngữ pháp tiếng Anh, giúp bạn diễn đạt sự phủ nhận hoặc bác bỏ thông tin. Hiểu rõ cấu trúc và cách sử dụng câu phủ định sẽ giúp bạn truyền đạt thông điệp chính xác và rõ ràng trong cả giao tiếp và viết lách.</p>`,
6:`<h1>Câu Gợi Ý (Suggestive Sentence)</h1>
<p>Câu gợi ý là một dạng câu phổ biến trong tiếng Anh, được sử dụng để đưa ra ý tưởng, lời khuyên, hoặc đề xuất một cách lịch sự và khéo léo. Đây là công cụ hữu ích để khuyến khích người nghe tham gia hoặc cân nhắc ý kiến mà không mang tính áp đặt.</p>

<h2>1. Định Nghĩa</h2>
<p><strong>Câu gợi ý (Suggestive Sentence):</strong> Là câu dùng để đề xuất, khuyến khích, hoặc mời gọi người khác thực hiện một hành động hoặc cân nhắc một ý kiến.</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Đưa ra ý tưởng hoặc kế hoạch.</li>
<li>Khuyến khích sự tham gia hoặc đồng ý từ người nghe.</li>
<li>Diễn đạt lời mời một cách lịch sự.</li>
</ul>

<h2>2. Cấu Trúc</h2>
<h3>2.1. Cấu trúc cơ bản với "Let’s"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Let’s + Verb (nguyên mẫu) + Object/Complement.</blockquote>
<p><strong>Ý nghĩa:</strong> Đề xuất thực hiện hành động cùng nhau.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Let’s go to the park.</code> (Hãy đi đến công viên.)</li>
<li><code>Let’s have lunch together.</code> (Hãy cùng ăn trưa.)</li>
</ul>

<h3>2.2. Cấu trúc với "Shall we"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Shall we + Verb (nguyên mẫu) + Object/Complement?</blockquote>
<p><strong>Ý nghĩa:</strong> Đưa ra gợi ý hoặc hỏi ý kiến để thực hiện hành động cùng nhau.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Shall we watch a movie?</code> (Chúng ta xem phim nhé?)</li>
</ul>

<h3>2.3. Cấu trúc với "Why don’t we"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Why don’t we + Verb (nguyên mẫu) + Object/Complement?</blockquote>
<p><strong>Ý nghĩa:</strong> Gợi ý làm một việc gì đó theo cách nhẹ nhàng.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>Why don’t we try this new restaurant?</code> (Tại sao chúng ta không thử nhà hàng mới này nhỉ?)</li>
</ul>

<h3>2.4. Cấu trúc với "How about" hoặc "What about"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>How about/What about + V-ing/Noun?</blockquote>
<p><strong>Ý nghĩa:</strong> Đề xuất hoặc hỏi ý kiến một cách lịch sự.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>How about going to the beach?</code> (Hay là đi biển thì sao?)</li>
<li><code>What about a cup of coffee?</code> (Một tách cà phê thì sao?)</li>
</ul>

<h3>2.5. Cấu trúc với "I suggest"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>I suggest + V-ing/Noun/that + Clause.</blockquote>
<p><strong>Ý nghĩa:</strong> Đề xuất ý kiến cá nhân hoặc khuyến nghị.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>I suggest taking a break.</code> (Tôi đề nghị nghỉ giải lao.)</li>
<li><code>I suggest that we discuss this tomorrow.</code> (Tôi đề nghị chúng ta thảo luận việc này vào ngày mai.)</li>
</ul>

<h2>3. Dấu Hiệu Nhận Biết</h2>
<ul>
<li><strong>Các cụm từ thường gặp:</strong> Let’s, Shall we, Why don’t we, How about, What about, I suggest.</li>
<li><strong>Ngữ điệu nhẹ nhàng:</strong> Câu gợi ý thường mang tính khuyến khích, không áp đặt.</li>
<li><strong>Động từ nguyên mẫu hoặc động từ thêm "-ing":</strong> Tùy thuộc vào cấu trúc, động từ có thể ở dạng nguyên mẫu hoặc thêm "-ing".</li>
</ul>

<h2>4. Vai Trò</h2>
<ul>
<li><strong>Xây dựng mối quan hệ:</strong> Sử dụng câu gợi ý giúp giao tiếp trở nên thân thiện và dễ chịu.</li>
<li><strong>Khuyến khích sự tham gia:</strong> Khuyến khích người khác bày tỏ ý kiến hoặc đồng ý với đề xuất.</li>
<li><strong>Thể hiện sự lịch sự:</strong> Là cách khéo léo để đưa ra lời khuyên hoặc ý tưởng mà không gây áp lực.</li>
</ul>

<h2>5. Ví Dụ Minh Họa</h2>
<h3>5.1. Với "Let’s"</h3>
<ul>
<li><code>Let’s go for a walk.</code> (Hãy đi dạo nhé.)</li>
<li><code>Let’s try this new recipe.</code> (Hãy thử công thức mới này.)</li>
</ul>

<h3>5.2. Với "Shall we"</h3>
<ul>
<li><code>Shall we take a taxi?</code> (Chúng ta đi taxi nhé?)</li>
<li><code>Shall we start the meeting now?</code> (Chúng ta bắt đầu cuộc họp ngay bây giờ chứ?)</li>
</ul>

<h3>5.3. Với "Why don’t we"</h3>
<ul>
<li><code>Why don’t we go shopping this weekend?</code> (Tại sao chúng ta không đi mua sắm vào cuối tuần này nhỉ?)</li>
</ul>

<h3>5.4. Với "How about" và "What about"</h3>
<ul>
<li><code>How about watching a movie tonight?</code> (Hay là xem một bộ phim tối nay thì sao?)</li>
</ul>

<h3>5.5. Với "I suggest"</h3>
<ul>
<li><code>I suggest visiting the museum.</code> (Tôi đề nghị thăm bảo tàng.)</li>
</ul>

<h2>6. Lưu Ý</h2>
<ul>
<li><strong>Ngữ cảnh sử dụng:</strong> Câu gợi ý thường được dùng trong giao tiếp thân thiện, không mang tính ép buộc.</li>
<li><strong>Tránh nhầm lẫn với câu mệnh lệnh:</strong> Câu gợi ý khác với câu mệnh lệnh, vì nó không mang tính ra lệnh hoặc áp đặt.</li>
<li><strong>Đảm bảo sử dụng đúng cấu trúc:</strong> Chọn cấu trúc phù hợp với ngữ cảnh để tránh gây hiểu nhầm.</li>
</ul>

<h2>7. Tổng Kết</h2>
<p>Câu gợi ý là một công cụ quan trọng trong giao tiếp tiếng Anh, giúp bạn đưa ra lời khuyên, ý kiến hoặc đề xuất một cách lịch sự và nhẹ nhàng. Hiểu rõ các cấu trúc và cách sử dụng câu gợi ý sẽ giúp bạn tự tin hơn trong các cuộc trò chuyện hàng ngày và trong các tình huống giao tiếp chuyên nghiệp.</p>`,

7:`<h1>Câu Cảm Thán (Exclamatory Sentence)</h1>
<p>Câu cảm thán là một dạng câu trong tiếng Anh được sử dụng để biểu đạt cảm xúc mạnh mẽ như ngạc nhiên, vui sướng, thất vọng, tức giận, hoặc bất kỳ cảm giác mãnh liệt nào khác. Đây là loại câu giúp nhấn mạnh và truyền tải sắc thái cảm xúc một cách sinh động trong giao tiếp.</p>

<h2>1. Định Nghĩa</h2>
<p><strong>Câu cảm thán (Exclamatory Sentence):</strong> Là câu được dùng để thể hiện cảm xúc mãnh liệt hoặc thái độ mạnh mẽ về một sự việc, hành động, hoặc tình huống.</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Diễn đạt cảm xúc bất ngờ hoặc phấn khích.</li>
<li>Nhấn mạnh ý nghĩa của một sự việc.</li>
<li>Thu hút sự chú ý của người nghe.</li>
</ul>

<h2>2. Cấu Trúc</h2>
<h3>2.1. Với "What"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>What + (a/an) + Adj + Noun + (Subject + Verb)!</blockquote>
<p><strong>Ý nghĩa:</strong> Thể hiện sự cảm thán về một danh từ hoặc cụm danh từ.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>What a beautiful day!</code> (Thật là một ngày đẹp trời!)</li>
<li><code>What an amazing performance!</code> (Thật là một màn trình diễn tuyệt vời!)</li>
</ul>

<h3>2.2. Với "How"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>How + Adj/Adv + Subject + Verb!</blockquote>
<p><strong>Ý nghĩa:</strong> Nhấn mạnh mức độ của một tính từ hoặc trạng từ.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>How lovely the flowers are!</code> (Những bông hoa thật đáng yêu làm sao!)</li>
<li><code>How quickly he runs!</code> (Anh ấy chạy nhanh làm sao!)</li>
</ul>

<h3>2.3. Với câu cảm thán trực tiếp</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Subject + Verb + Object + "!"</blockquote>
<p><strong>Ý nghĩa:</strong> Thể hiện cảm xúc trực tiếp không qua từ nối.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>I can’t believe it!</code> (Tôi không thể tin được!)</li>
<li><code>This is amazing!</code> (Thật tuyệt vời!)</li>
</ul>

<h2>3. Dấu Hiệu Nhận Biết</h2>
<ul>
<li><strong>Kết thúc bằng dấu chấm than (!):</strong> Dấu hiệu quan trọng để nhận biết câu cảm thán.</li>
<li><strong>Các từ bắt đầu thường gặp:</strong> "What," "How," hoặc các cụm từ chỉ cảm xúc mạnh mẽ.</li>
<li><strong>Ngữ điệu mạnh mẽ:</strong> Khi nói, câu cảm thán thường được nhấn mạnh với giọng điệu cảm xúc.</li>
</ul>

<h2>4. Vai Trò</h2>
<ul>
<li><strong>Thể hiện cảm xúc:</strong> Dùng để biểu đạt cảm xúc mạnh mẽ như ngạc nhiên, tức giận, vui vẻ, hoặc thất vọng.</li>
<li><strong>Nhấn mạnh ý nghĩa:</strong> Làm nổi bật một sự việc hoặc cảm giác.</li>
<li><strong>Giao tiếp sinh động:</strong> Giúp cuộc hội thoại trở nên hấp dẫn và tự nhiên hơn.</li>
</ul>

<h2>5. Ví Dụ Minh Họa</h2>
<h3>5.1. Với "What"</h3>
<ul>
<li><code>What a surprise!</code> (Thật là một bất ngờ!)</li>
<li><code>What a lovely house!</code> (Thật là một ngôi nhà đáng yêu!)</li>
<li><code>What a clever idea!</code> (Thật là một ý tưởng thông minh!)</li>
</ul>

<h3>5.2. Với "How"</h3>
<ul>
<li><code>How wonderful the weather is!</code> (Thời tiết thật tuyệt vời làm sao!)</li>
<li><code>How fast he solved the problem!</code> (Anh ấy giải quyết vấn đề nhanh làm sao!)</li>
</ul>

<h3>5.3. Với câu cảm thán trực tiếp</h3>
<ul>
<li><code>That’s incredible!</code> (Thật không thể tin nổi!)</li>
<li><code>I love this song!</code> (Tôi thích bài hát này!)</li>
<li><code>You’re amazing!</code> (Bạn thật tuyệt vời!)</li>
</ul>

<h2>6. Lưu Ý</h2>
<ul>
<li><strong>Không dùng dấu chấm than trong văn bản trang trọng:</strong> Trong các tài liệu hoặc văn bản chuyên nghiệp, dấu chấm than thường không được sử dụng để tránh mất tính nghiêm túc.</li>
<li><strong>Tránh lạm dụng câu cảm thán:</strong> Sử dụng quá nhiều câu cảm thán trong giao tiếp hoặc viết có thể làm mất đi sự nghiêm túc và hiệu quả truyền tải thông điệp.</li>
<li><strong>Phân biệt với câu trần thuật:</strong> Câu cảm thán thường nhấn mạnh cảm xúc, trong khi câu trần thuật chỉ đơn thuần cung cấp thông tin.</li>
</ul>

<h2>7. Tổng Kết</h2>
<p>Câu cảm thán là một phần quan trọng trong giao tiếp tiếng Anh, giúp thể hiện cảm xúc và làm cho lời nói trở nên sống động hơn. Việc sử dụng câu cảm thán một cách đúng đắn sẽ giúp bạn giao tiếp tự nhiên và hấp dẫn hơn, đồng thời tăng cường khả năng diễn đạt trong cả văn nói và văn viết.</p>`,
8:`<h1>Câu Chẻ (Cleft Sentence)</h1>
<p>Câu chẻ là một cấu trúc ngữ pháp trong tiếng Anh được sử dụng để nhấn mạnh một thành phần cụ thể trong câu. Thông qua việc tách câu thành hai phần, câu chẻ giúp người nói hoặc người viết làm nổi bật thông tin quan trọng, tạo sự rõ ràng và hiệu quả trong giao tiếp.</p>

<h2>1. Định Nghĩa</h2>
<p><strong>Câu chẻ (Cleft Sentence):</strong> Là loại câu được chia thành hai mệnh đề, trong đó một mệnh đề chính và một mệnh đề phụ được sử dụng để nhấn mạnh một thành phần cụ thể (chủ ngữ, tân ngữ, hoặc trạng ngữ).</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Nhấn mạnh thông tin quan trọng.</li>
<li>Làm rõ ý nghĩa của câu.</li>
<li>Thu hút sự chú ý của người nghe hoặc người đọc.</li>
</ul>

<h2>2. Cấu Trúc</h2>
<h3>2.1. Câu chẻ với "It is/was"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>It is/was + [thành phần được nhấn mạnh] + that/who + [phần còn lại].</blockquote>
<p><strong>Ý nghĩa:</strong> Dùng để nhấn mạnh chủ ngữ, tân ngữ hoặc trạng ngữ.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>It was John who broke the window.</code> (Chính John là người đã làm vỡ cửa sổ.)</li>
<li><code>It is at the park that we met for the first time.</code> (Chính tại công viên chúng tôi đã gặp nhau lần đầu.)</li>
</ul>

<h3>2.2. Câu chẻ với "What"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>What + [mệnh đề] + is/was + [thành phần được nhấn mạnh].</blockquote>
<p><strong>Ý nghĩa:</strong> Dùng để nhấn mạnh hành động hoặc sự việc.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>What she needs is a good rest.</code> (Điều cô ấy cần là một giấc nghỉ ngơi tốt.)</li>
<li><code>What I want is a cup of coffee.</code> (Điều tôi muốn là một tách cà phê.)</li>
</ul>

<h3>2.3. Câu chẻ với "All"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>All + [mệnh đề] + is/was + [thành phần được nhấn mạnh].</blockquote>
<p><strong>Ý nghĩa:</strong> Nhấn mạnh điều duy nhất hoặc toàn bộ.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>All I want is your happiness.</code> (Tất cả những gì tôi muốn là hạnh phúc của bạn.)</li>
<li><code>All she did was cry.</code> (Tất cả những gì cô ấy làm là khóc.)</li>
</ul>

<h3>2.4. Câu chẻ với "The reason why"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>The reason why + [mệnh đề] + is/was + [thành phần được nhấn mạnh].</blockquote>
<p><strong>Ý nghĩa:</strong> Nhấn mạnh lý do hoặc nguyên nhân.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>The reason why I left is that I was tired.</code> (Lý do tôi rời đi là vì tôi mệt mỏi.)</li>
<li><code>The reason why they failed is their lack of preparation.</code> (Lý do họ thất bại là do thiếu sự chuẩn bị.)</li>
</ul>

<h3>2.5. Câu chẻ với "It is because"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>It is because + [lý do] + that + [kết quả].</blockquote>
<p><strong>Ý nghĩa:</strong> Nhấn mạnh lý do hoặc nguyên nhân.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li><code>It is because she worked hard that she succeeded.</code> (Chính vì cô ấy làm việc chăm chỉ mà cô ấy đã thành công.)</li>
<li><code>It is because of the rain that we canceled the trip.</code> (Chính vì mưa mà chúng tôi hủy chuyến đi.)</li>
</ul>

<h2>3. Dấu Hiệu Nhận Biết</h2>
<ul>
<li><strong>Sử dụng "It is/was," "What," "All," hoặc "The reason why":</strong> Đây là các từ/cụm từ thường xuất hiện trong câu chẻ.</li>
<li><strong>Câu được chia thành hai phần rõ ràng:</strong> Phần nhấn mạnh (chủ ngữ, tân ngữ, hoặc trạng ngữ) và phần bổ sung thông tin.</li>
</ul>

<h2>4. Vai Trò</h2>
<ul>
<li><strong>Nhấn mạnh ý chính:</strong> Câu chẻ giúp làm nổi bật thông tin quan trọng, đảm bảo rằng người nghe hoặc người đọc chú ý đến phần thông tin này.</li>
<li><strong>Tạo sự rõ ràng:</strong> Câu chẻ giúp làm rõ ý nghĩa của câu, đặc biệt trong các tình huống phức tạp.</li>
<li><strong>Làm phong phú ngôn ngữ:</strong> Giúp giao tiếp trở nên tự nhiên và linh hoạt hơn.</li>
</ul>

<h2>5. Ví Dụ Minh Họa</h2>
<h3>5.1. Câu chẻ với "It is/was":</h3>
<ul>
<li><code>It is my mother who cooks the best food.</code> (Chính mẹ tôi là người nấu ăn ngon nhất.)</li>
<li><code>It was yesterday that I saw him.</code> (Chính ngày hôm qua tôi đã gặp anh ấy.)</li>
</ul>

<h3>5.2. Câu chẻ với "What":</h3>
<ul>
<li><code>What I love about this city is its people.</code> (Điều tôi yêu thích về thành phố này là con người của nó.)</li>
<li><code>What he said shocked everyone.</code> (Điều anh ấy nói đã làm mọi người sốc.)</li>
</ul>

<h3>5.3. Câu chẻ với "All":</h3>
<ul>
<li><code>All I need is some rest.</code> (Tất cả những gì tôi cần là nghỉ ngơi.)</li>
<li><code>All they want is to win the game.</code> (Tất cả những gì họ muốn là thắng trận đấu.)</li>
</ul>

<h3>5.4. Câu chẻ với "The reason why":</h3>
<ul>
<li><code>The reason why I didn’t go is that I was sick.</code> (Lý do tôi không đi là vì tôi bị bệnh.)</li>
<li><code>The reason why she is late is the traffic jam.</code> (Lý do cô ấy đến muộn là do kẹt xe.)</li>
</ul>

<h3>5.5. Câu chẻ với "It is because":</h3>
<ul>
<li><code>It is because of his kindness that we admire him.</code> (Chính vì sự tử tế của anh ấy mà chúng tôi ngưỡng mộ anh ấy.)</li>
<li><code>It is because they worked together that the project succeeded.</code> (Chính vì họ làm việc cùng nhau mà dự án đã thành công.)</li>
</ul>

<h2>6. Lưu Ý</h2>
<ul>
<li><strong>Sử dụng đúng từ nhấn mạnh:</strong> Đảm bảo chọn từ phù hợp với ý muốn truyền đạt (What, All, The reason why).</li>
<li><strong>Tránh lạm dụng:</strong> Sử dụng câu chẻ quá nhiều có thể làm giảm tính tự nhiên của văn bản hoặc lời nói.</li>
<li><strong>Đảm bảo tính chính xác:</strong> Các thành phần được nhấn mạnh cần liên kết chặt chẽ với phần còn lại của câu.</li>
</ul>

<h2>7. Tổng Kết</h2>
<p>Câu chẻ là một công cụ mạnh mẽ trong tiếng Anh, giúp nhấn mạnh thông tin quan trọng và tạo sự rõ ràng trong giao tiếp. Việc sử dụng câu chẻ đúng cách không chỉ làm tăng tính thuyết phục mà còn làm cho ngôn ngữ trở nên phong phú và tự nhiên hơn trong cả văn nói và văn viết.</p>`,
9:`<h1>Câu Mệnh Lệnh (Imperative Sentence)</h1>
<p>Câu mệnh lệnh là một loại câu trong tiếng Anh được sử dụng để diễn đạt yêu cầu, ra lệnh, hướng dẫn, hoặc đưa ra lời mời và lời khuyên. Đây là dạng câu phổ biến trong giao tiếp hằng ngày, mang tính trực tiếp và ngắn gọn.</p>

<h2>1. Định Nghĩa</h2>
<p><strong>Câu mệnh lệnh (Imperative Sentence):</strong> Là câu được sử dụng để yêu cầu, chỉ thị, ra lệnh, đưa ra lời khuyên, hoặc mời gọi ai đó thực hiện một hành động.</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Ra lệnh hoặc yêu cầu thực hiện hành động.</li>
<li>Đưa ra hướng dẫn hoặc chỉ dẫn.</li>
<li>Mời gọi hoặc khuyến khích.</li>
<li>Đưa ra cảnh báo.</li>
</ul>

<h2>2. Cấu Trúc</h2>
<h3>2.1. Cấu trúc cơ bản</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Verb (động từ nguyên mẫu) + Object/Complement.</blockquote>
<p><strong>Ý nghĩa:</strong> Diễn đạt mệnh lệnh hoặc yêu cầu trực tiếp.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>Open the door. *(Mở cửa ra.)*</li>
<li>Turn off the light. *(Tắt đèn đi.)*</li>
</ul>

<h3>2.2. Câu mệnh lệnh phủ định</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Don’t + Verb (động từ nguyên mẫu) + Object/Complement.</blockquote>
<p><strong>Ý nghĩa:</strong> Diễn đạt sự ngăn cấm hoặc yêu cầu không làm một việc gì đó.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>Don’t touch that. *(Đừng chạm vào cái đó.)*</li>
<li>Don’t be late. *(Đừng đến trễ.)*</li>
</ul>

<h3>2.3. Câu mệnh lệnh lịch sự</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Please + Verb (động từ nguyên mẫu) + Object/Complement.</blockquote>
<p><strong>Ý nghĩa:</strong> Thêm từ "please" để câu trở nên lịch sự và nhẹ nhàng hơn.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>Please sit down. *(Vui lòng ngồi xuống.)*</li>
<li>Please take a look at this document. *(Vui lòng xem tài liệu này.)*</li>
</ul>

<h3>2.4. Câu mệnh lệnh bao gồm "Let’s"</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Let’s + Verb (động từ nguyên mẫu) + Object/Complement.</blockquote>
<p><strong>Ý nghĩa:</strong> Mời gọi thực hiện hành động cùng nhau.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>Let’s go for a walk. *(Hãy đi dạo.)*</li>
<li>Let’s discuss this issue. *(Hãy cùng thảo luận vấn đề này.)*</li>
</ul>

<h3>2.5. Câu mệnh lệnh dùng để cảnh báo</h3>
<p><strong>Cấu trúc:</strong></p>
<blockquote>Verb + Object/Complement.</blockquote>
<p><strong>Ý nghĩa:</strong> Đưa ra cảnh báo hoặc khuyến cáo.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>Watch out! *(Cẩn thận!)*</li>
<li>Be careful! *(Hãy cẩn thận!)*</li>
</ul>

<h2>3. Dấu Hiệu Nhận Biết</h2>
<ul>
<li><strong>Chủ ngữ thường bị ẩn:</strong> Chủ ngữ trong câu mệnh lệnh thường được hiểu ngầm là "you."</li>
<li><strong>Động từ nguyên mẫu đứng đầu:</strong> Câu mệnh lệnh thường bắt đầu bằng động từ nguyên mẫu.</li>
<li><strong>Có thể kết thúc bằng dấu chấm hoặc dấu chấm than (!):</strong> Tùy thuộc vào mức độ khẩn cấp hoặc nhấn mạnh.</li>
</ul>

<h2>4. Vai Trò</h2>
<ul>
<li><strong>Ra lệnh hoặc yêu cầu:</strong> Dùng để yêu cầu người khác thực hiện hành động.</li>
<li><strong>Ví dụ:</strong> "Clean the room." *(Dọn phòng.)*</li>
<li><strong>Hướng dẫn hoặc chỉ dẫn:</strong> Dùng trong các tình huống cần hướng dẫn rõ ràng.</li>
<li><strong>Ví dụ:</strong> "Turn right at the next corner." *(Rẽ phải ở góc tiếp theo.)*</li>
<li><strong>Mời gọi:</strong> Thể hiện lời mời lịch sự.</li>
<li><strong>Ví dụ:</strong> "Have some tea." *(Hãy dùng một chút trà.)*</li>
<li><strong>Khuyên bảo:</strong> Đưa ra lời khuyên nhẹ nhàng.</li>
<li><strong>Ví dụ:</strong> "Take your time." *(Hãy từ từ thôi.)*</li>
</ul>

<h2>5. Ví Dụ Minh Họa</h2>
<h3>5.1. Câu mệnh lệnh cơ bản</h3>
<ul>
<li>Close the window. *(Đóng cửa sổ lại.)*</li>
<li>Finish your homework. *(Hoàn thành bài tập về nhà.)*</li>
</ul>

<h3>5.2. Câu mệnh lệnh phủ định</h3>
<ul>
<li>Don’t run in the hallway. *(Không chạy trong hành lang.)*</li>
<li>Don’t forget your keys. *(Đừng quên chìa khóa của bạn.)*</li>
</ul>

<h3>5.3. Câu mệnh lệnh lịch sự</h3>
<ul>
<li>Please wait a moment. *(Vui lòng chờ một chút.)*</li>
<li>Please speak louder. *(Vui lòng nói lớn hơn.)*</li>
</ul>

<h3>5.4. Câu mệnh lệnh bao gồm "Let’s"</h3>
<ul>
<li>Let’s take a break. *(Hãy nghỉ giải lao.)*</li>
<li>Let’s have lunch together. *(Hãy cùng ăn trưa.)*</li>
</ul>

<h3>5.5. Câu mệnh lệnh cảnh báo</h3>
<ul>
<li>Be quiet! *(Im lặng!)*</li>
<li>Stay away from the fire! *(Tránh xa lửa!)*</li>
</ul>

<h2>6. Lưu Ý</h2>
<ul>
<li><strong>Sử dụng ngữ cảnh phù hợp:</strong> Trong tình huống trang trọng, sử dụng câu mệnh lệnh lịch sự bằng cách thêm "please."</li>
<li><strong>Không lạm dụng câu mệnh lệnh:</strong> Tránh sử dụng quá nhiều câu mệnh lệnh để không gây cảm giác áp đặt.</li>
<li><strong>Chú ý ngữ điệu:</strong> Khi nói, câu mệnh lệnh nên có ngữ điệu phù hợp với mục đích (ra lệnh, yêu cầu, hoặc khuyên bảo).</li>
</ul>

<h2>7. Tổng Kết</h2>
<p>Câu mệnh lệnh là một công cụ ngữ pháp quan trọng trong tiếng Anh, giúp diễn đạt các yêu cầu, chỉ dẫn, hoặc lời mời một cách trực tiếp. Sử dụng câu mệnh lệnh đúng cách không chỉ làm rõ thông điệp mà còn giúp giao tiếp trở nên hiệu quả và dễ dàng hơn.</p>`,
10:`<h1>Câu Giả Định (Subjunctive Sentence)</h1>
<p>Câu giả định là một dạng câu trong tiếng Anh được sử dụng để diễn tả các tình huống không có thực, giả định, mong muốn, yêu cầu, hoặc đề xuất. Đây là một cấu trúc ngữ pháp quan trọng, đặc biệt trong các ngữ cảnh trang trọng hoặc học thuật.</p>

<h2>1. Định Nghĩa</h2>
<p><strong>Câu giả định (Subjunctive Sentence):</strong> Là câu diễn tả một điều kiện không có thực, một mong muốn, một sự kiện tương lai không chắc chắn, hoặc một tình huống mang tính giả định.</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Biểu đạt mong muốn hoặc ước muốn.</li>
<li>Diễn đạt các giả định hoặc điều kiện không có thực.</li>
<li>Đưa ra đề xuất, yêu cầu, hoặc lời khuyên.</li>
</ul>

<h2>2. Cấu Trúc</h2>
<h3>2.1. Câu giả định với "If" (Điều kiện không có thực)</h3>
<blockquote>
If + S + were + Complement, S + would/could/might + Verb.<br>
If + S + had + Past Participle, S + would/could/might + have + Past Participle.
</blockquote>
<p><strong>Ý nghĩa:</strong> Dùng để diễn đạt điều kiện giả định không có thật trong hiện tại, tương lai, hoặc quá khứ.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>If I were a millionaire, I would buy a yacht. *(Nếu tôi là triệu phú, tôi sẽ mua một chiếc du thuyền.)*</li>
<li>If she had studied harder, she would have passed the exam. *(Nếu cô ấy học chăm hơn, cô ấy đã đỗ kỳ thi.)*</li>
</ul>

<h3>2.2. Câu giả định với "Wish" (Ước muốn)</h3>
<blockquote>
S + wish(es) + S + were/could + Verb (hiện tại, tương lai).<br>
S + wish(es) + S + had + Past Participle (quá khứ).
</blockquote>
<p><strong>Ý nghĩa:</strong> Dùng để diễn đạt mong muốn trái ngược với thực tế.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>I wish I were taller. *(Tôi ước mình cao hơn.)*</li>
<li>She wishes she had not missed the train. *(Cô ấy ước cô ấy đã không lỡ chuyến tàu.)*</li>
</ul>

<h3>2.3. Câu giả định với "It’s time" (Đã đến lúc)</h3>
<blockquote>
It’s (high) time + S + V2/V-ed.
</blockquote>
<p><strong>Ý nghĩa:</strong> Dùng để diễn đạt rằng một việc nên được làm ngay lập tức.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>It’s time you went to bed. *(Đã đến lúc bạn đi ngủ.)*</li>
<li>It’s high time we started the meeting. *(Đã đến lúc chúng ta bắt đầu cuộc họp.)*</li>
</ul>

<h3>2.4. Câu giả định với động từ "suggest," "recommend," "demand," "insist"</h3>
<blockquote>
S + suggest/recommend/insist/demand + that + S + (should) + Verb (nguyên mẫu).
</blockquote>
<p><strong>Ý nghĩa:</strong> Dùng để đưa ra đề xuất hoặc yêu cầu một cách trang trọng.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>I suggest that he (should) take a break. *(Tôi đề nghị anh ấy nên nghỉ ngơi.)*</li>
<li>She demanded that the report (should) be revised. *(Cô ấy yêu cầu rằng bản báo cáo phải được sửa đổi.)*</li>
</ul>

<h3>2.5. Câu giả định với "as if/as though" (Như thể là)</h3>
<blockquote>
S + Verb + as if/as though + S + V2/V-ed (hiện tại, tương lai).<br>
S + Verb + as if/as though + S + had + Past Participle (quá khứ).
</blockquote>
<p><strong>Ý nghĩa:</strong> Dùng để diễn đạt một hành động hoặc trạng thái có vẻ như không có thật.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>He acts as if he knew everything. *(Anh ấy hành động như thể anh ấy biết mọi thứ.)*</li>
<li>She looked at me as though I had done something wrong. *(Cô ấy nhìn tôi như thể tôi đã làm điều gì đó sai trái.)*</li>
</ul>

<h2>3. Dấu Hiệu Nhận Biết</h2>
<ul>
<li>Có sự xuất hiện của các liên từ giả định như "if," "wish," "as if," hoặc các động từ đặc biệt như "suggest," "recommend," "insist."</li>
<li>Sử dụng thì giả định: "Were" thay vì "was" trong điều kiện giả định, động từ nguyên mẫu trong các mệnh đề phụ thuộc.</li>
<li>Thường diễn đạt một tình huống trái ngược với thực tế.</li>
</ul>

<h2>4. Vai Trò</h2>
<ul>
<li>Diễn đạt các tình huống không có thật.</li>
<li>Biểu đạt mong muốn hoặc cảm xúc.</li>
<li>Tạo sự trang trọng trong văn bản hoặc lời nói.</li>
</ul>

<h2>5. Ví Dụ Minh Họa</h2>
<ul>
<li><strong>Câu giả định với "If":</strong> If I were you, I would accept the offer. *(Nếu tôi là bạn, tôi sẽ chấp nhận lời đề nghị.)*</li>
<li><strong>Câu giả định với "Wish":</strong> I wish I could fly. *(Tôi ước tôi có thể bay.)*</li>
<li><strong>Câu giả định với "It’s time":</strong> It’s time we left for the airport. *(Đã đến lúc chúng ta rời đi đến sân bay.)*</li>
<li><strong>Câu giả định với "suggest/recommend":</strong> The doctor recommends that she (should) rest for a few days. *(Bác sĩ khuyên rằng cô ấy nên nghỉ ngơi vài ngày.)*</li>
<li><strong>Câu giả định với "as if/as though":</strong> He speaks as if he were the boss. *(Anh ấy nói như thể anh ấy là sếp.)*</li>
</ul>

<h2>6. Lưu Ý</h2>
<ul>
<li>Không nhầm lẫn với câu điều kiện thực tế.</li>
<li>Sử dụng đúng động từ: "Were" được dùng thay vì "was" trong mệnh đề giả định.</li>
<li>Ngữ cảnh phù hợp: Câu giả định thường xuất hiện trong các tình huống trang trọng hoặc mang tính tưởng tượng.</li>
</ul>

<h2>7. Tổng Kết</h2>
<p>Câu giả định là một cấu trúc quan trọng trong tiếng Anh, giúp diễn đạt các tình huống không có thực, các mong muốn hoặc yêu cầu trang trọng. Sử dụng thành thạo cấu trúc này sẽ làm tăng khả năng diễn đạt trong cả văn viết và văn nói, đặc biệt trong các ngữ cảnh học thuật hoặc giao tiếp chuyên nghiệp.</p>`,
11:`<h1>Câu Ghép (Compound Sentence)</h1>
<p>Câu ghép là một loại câu trong tiếng Anh được sử dụng để diễn đạt hai hoặc nhiều ý tưởng độc lập trong cùng một câu, giúp làm rõ mối quan hệ giữa các ý tưởng. Đây là một công cụ ngữ pháp quan trọng, đặc biệt trong văn viết và giao tiếp hàng ngày.</p>

<h2>1. Định Nghĩa</h2>
<p><strong>Câu ghép (Compound Sentence):</strong> Là câu bao gồm hai hoặc nhiều mệnh đề độc lập (independent clauses) được liên kết với nhau bằng liên từ kết hợp (coordinating conjunctions), dấu chấm phẩy (;), hoặc từ nối khác.</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Liên kết các ý tưởng có liên quan.</li>
<li>Làm câu văn ngắn gọn và súc tích hơn.</li>
<li>Tránh lặp lại cấu trúc hoặc thông tin.</li>
</ul>

<h2>2. Cấu Trúc</h2>
<p>Câu ghép được hình thành bằng cách kết hợp hai hoặc nhiều mệnh đề độc lập. Mỗi mệnh đề đều có thể đứng riêng lẻ như một câu hoàn chỉnh.</p>

<h3>2.1. Liên kết bằng liên từ kết hợp (Coordinating Conjunctions)</h3>
<blockquote>
Independent Clause + Coordinating Conjunction + Independent Clause
</blockquote>
<p><strong>Liên từ kết hợp (FANBOYS):</strong> For, And, Nor, But, Or, Yet, So.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>I like coffee, and she likes tea. *(Tôi thích cà phê, và cô ấy thích trà.)*</li>
<li>He was tired, but he finished his work. *(Anh ấy mệt, nhưng anh ấy vẫn hoàn thành công việc.)*</li>
</ul>

<h3>2.2. Liên kết bằng dấu chấm phẩy (;)</h3>
<blockquote>
Independent Clause ; Independent Clause
</blockquote>
<p><strong>Ý nghĩa:</strong> Dùng khi hai mệnh đề có liên quan chặt chẽ và không cần liên từ kết hợp.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>She loves painting; he prefers drawing. *(Cô ấy thích vẽ tranh; anh ấy thích phác họa.)*</li>
<li>We went to the park; it was a sunny day. *(Chúng tôi đến công viên; đó là một ngày nắng đẹp.)*</li>
</ul>

<h3>2.3. Liên kết bằng từ nối (Conjunctive Adverbs)</h3>
<blockquote>
Independent Clause ; Conjunctive Adverb, Independent Clause
</blockquote>
<p><strong>Conjunctive Adverbs:</strong> However, Therefore, Moreover, Nevertheless, Consequently, Furthermore, Otherwise, Meanwhile, etc.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>She studied hard; therefore, she passed the exam. *(Cô ấy học chăm chỉ; do đó, cô ấy đã vượt qua kỳ thi.)*</li>
<li>He didn’t study; however, he still passed. *(Anh ấy không học; tuy nhiên, anh ấy vẫn đỗ.)*</li>
</ul>

<h2>3. Dấu Hiệu Nhận Biết</h2>
<ul>
<li>Có ít nhất hai mệnh đề độc lập.</li>
<li>Sử dụng liên từ kết hợp, dấu chấm phẩy, hoặc trạng từ liên kết để nối các mệnh đề.</li>
<li>Mỗi mệnh đề có chủ ngữ và động từ riêng, có thể đứng riêng lẻ như một câu hoàn chỉnh.</li>
</ul>

<h2>4. Vai Trò</h2>
<ul>
<li><strong>Liên kết ý tưởng:</strong> Kết hợp các mệnh đề có liên quan để tránh câu ngắn, rời rạc.</li>
<li><strong>Làm câu văn phong phú:</strong> Giúp văn bản hoặc lời nói mạch lạc, hấp dẫn hơn.</li>
<li><strong>Truyền đạt nhiều thông tin:</strong> Thể hiện nhiều ý tưởng trong cùng một câu để tiết kiệm ngôn từ.</li>
</ul>

<h2>5. Ví Dụ Minh Họa</h2>
<h3>5.1. Liên kết bằng liên từ kết hợp</h3>
<ul>
<li>She wanted to go out, but it started to rain. *(Cô ấy muốn ra ngoài, nhưng trời bắt đầu mưa.)*</li>
<li>I love chocolate, and he loves vanilla. *(Tôi thích sô-cô-la, và anh ấy thích vani.)*</li>
</ul>
<h3>5.2. Liên kết bằng dấu chấm phẩy</h3>
<ul>
<li>The sun was setting; the sky turned orange. *(Mặt trời đang lặn; bầu trời chuyển sang màu cam.)*</li>
<li>He has a meeting at 9 AM; he must leave soon. *(Anh ấy có một cuộc họp lúc 9 giờ sáng; anh ấy phải đi ngay.)*</li>
</ul>
<h3>5.3. Liên kết bằng từ nối</h3>
<ul>
<li>She is very talented; moreover, she is hardworking. *(Cô ấy rất tài năng; hơn nữa, cô ấy còn chăm chỉ.)*</li>
<li>He didn’t prepare well; consequently, he failed the test. *(Anh ấy không chuẩn bị tốt; do đó, anh ấy đã trượt bài kiểm tra.)*</li>
</ul>

<h2>6. Lưu Ý</h2>
<ul>
<li><strong>Dùng đúng liên từ hoặc từ nối:</strong> Chọn liên từ phù hợp với mối quan hệ giữa các mệnh đề.</li>
<li><strong>Không nhầm lẫn với câu phức:</strong> Trong câu ghép, các mệnh đề đều độc lập; trong câu phức, có mệnh đề phụ thuộc.</li>
<li><strong>Tránh lạm dụng:</strong> Sử dụng quá nhiều câu ghép có thể làm văn bản trở nên phức tạp hoặc dài dòng.</li>
</ul>

<h2>7. Tổng Kết</h2>
<p>Câu ghép là một công cụ ngữ pháp quan trọng, giúp bạn liên kết các ý tưởng độc lập một cách logic và mạch lạc. Hiểu rõ cách sử dụng câu ghép sẽ giúp bạn giao tiếp hiệu quả và làm phong phú văn bản của mình.</p>`,
12:`<h1>Câu Phức và Câu Phức Ghép</h1>
<p>Câu phức (Complex Sentence) và câu phức ghép (Compound-Complex Sentence) là hai loại câu quan trọng trong tiếng Anh, được sử dụng để diễn đạt các ý tưởng phức tạp hoặc liên kết nhiều mệnh đề. Đây là công cụ ngữ pháp hữu ích trong giao tiếp và viết văn bản.</p>

<h2>1. Câu Phức (Complex Sentence)</h2>
<h3>1.1. Định Nghĩa</h3>
<p><strong>Câu phức (Complex Sentence):</strong> Là câu bao gồm một mệnh đề chính (main clause) và ít nhất một mệnh đề phụ thuộc (subordinate clause). Mệnh đề phụ thuộc thường bắt đầu bằng liên từ phụ thuộc (subordinating conjunction) hoặc đại từ quan hệ (relative pronoun).</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Diễn đạt các ý tưởng phức tạp.</li>
<li>Thể hiện mối quan hệ nguyên nhân - kết quả, thời gian, điều kiện, hoặc sự đối lập.</li>
</ul>

<h3>1.2. Cấu Trúc</h3>
<p><strong>Cấu trúc chung:</strong></p>
<blockquote>
Main Clause + Subordinating Conjunction + Subordinate Clause.<br>
Subordinate Clause + Subordinating Conjunction + Main Clause.
</blockquote>
<p><strong>Liên từ phụ thuộc phổ biến:</strong></p>
<ul>
<li><strong>Thời gian:</strong> after, before, when, while, as soon as, since.</li>
<li><strong>Nguyên nhân:</strong> because, since, as.</li>
<li><strong>Điều kiện:</strong> if, unless, provided that.</li>
<li><strong>Đối lập:</strong> although, though, even though.</li>
<li><strong>Mục đích:</strong> so that, in order that.</li>
</ul>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>She stayed at home because it was raining. *(Cô ấy ở nhà vì trời đang mưa.)*</li>
<li>If you work hard, you will succeed. *(Nếu bạn làm việc chăm chỉ, bạn sẽ thành công.)*</li>
<li>Although he was tired, he kept working. *(Mặc dù anh ấy mệt, anh ấy vẫn tiếp tục làm việc.)*</li>
</ul>

<h3>1.3. Dấu Hiệu Nhận Biết</h3>
<ul>
<li>Chứa một mệnh đề độc lập (có thể đứng riêng lẻ) và một hoặc nhiều mệnh đề phụ thuộc.</li>
<li>Sử dụng liên từ phụ thuộc để kết nối các mệnh đề.</li>
<li>Mệnh đề phụ thuộc không thể đứng riêng lẻ.</li>
</ul>

<h3>1.4. Vai Trò</h3>
<ul>
<li><strong>Mở rộng ý tưởng:</strong> Dùng để giải thích thêm về ý nghĩa của mệnh đề chính.</li>
<li><strong>Thể hiện mối quan hệ logic:</strong> Giúp câu văn có chiều sâu hơn bằng cách kết nối các ý tưởng.</li>
<li><strong>Tăng tính hấp dẫn trong văn viết:</strong> Làm câu văn phong phú và tự nhiên.</li>
</ul>

<h2>2. Câu Phức Ghép (Compound-Complex Sentence)</h2>
<h3>2.1. Định Nghĩa</h3>
<p><strong>Câu phức ghép (Compound-Complex Sentence):</strong> Là câu kết hợp giữa câu ghép (compound sentence) và câu phức (complex sentence). Câu này có ít nhất hai mệnh đề chính (independent clauses) và ít nhất một mệnh đề phụ thuộc (subordinate clause).</p>
<p><strong>Mục đích:</strong></p>
<ul>
<li>Diễn đạt các ý tưởng phức tạp hơn.</li>
<li>Thể hiện mối quan hệ giữa nhiều ý tưởng trong cùng một câu.</li>
</ul>

<h3>2.2. Cấu Trúc</h3>
<p><strong>Cấu trúc chung:</strong></p>
<blockquote>
Independent Clause + Coordinating Conjunction + Independent Clause + Subordinating Conjunction + Subordinate Clause.<br>
Subordinate Clause + Independent Clause + Coordinating Conjunction + Independent Clause.
</blockquote>
<p><strong>Liên từ phối hợp:</strong> and, but, or, so, yet, for, nor.</p>
<p><strong>Ví dụ:</strong></p>
<ul>
<li>I went to the park, and I played soccer because the weather was nice. *(Tôi đã đến công viên, và tôi chơi bóng đá vì thời tiết đẹp.)*</li>
<li>Although he was tired, he finished his homework, and he went to bed early. *(Mặc dù anh ấy mệt, anh ấy đã hoàn thành bài tập và đi ngủ sớm.)*</li>
<li>She didn’t want to go out, but she agreed to join us since it was a special occasion. *(Cô ấy không muốn ra ngoài, nhưng cô ấy đồng ý tham gia cùng chúng tôi vì đó là một dịp đặc biệt.)*</li>
</ul>

<h3>2.3. Dấu Hiệu Nhận Biết</h3>
<ul>
<li>Có ít nhất hai mệnh đề chính độc lập (có thể đứng riêng lẻ).</li>
<li>Có ít nhất một mệnh đề phụ thuộc không thể đứng riêng lẻ.</li>
<li>Sử dụng cả liên từ phối hợp và liên từ phụ thuộc.</li>
</ul>

<h3>2.4. Vai Trò</h3>
<ul>
<li><strong>Thể hiện ý tưởng phức tạp:</strong> Giúp trình bày mối quan hệ giữa nhiều ý tưởng trong một câu.</li>
<li><strong>Tăng tính liên kết trong văn bản:</strong> Giúp các ý tưởng được trình bày mạch lạc và liên kết chặt chẽ hơn.</li>
<li><strong>Làm phong phú ngôn ngữ:</strong> Câu phức ghép giúp câu văn trở nên tự nhiên và có chiều sâu.</li>
</ul>

<h2>3. So Sánh Câu Phức và Câu Phức Ghép</h2>
<table>
<thead>
    <tr>
        <th>Tiêu chí</th>
        <th>Câu Phức (Complex Sentence)</th>
        <th>Câu Phức Ghép (Compound-Complex Sentence)</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Mệnh đề chính</td>
        <td>1 mệnh đề chính</td>
        <td>Ít nhất 2 mệnh đề chính</td>
    </tr>
    <tr>
        <td>Mệnh đề phụ thuộc</td>
        <td>Ít nhất 1 mệnh đề phụ thuộc</td>
        <td>Ít nhất 1 mệnh đề phụ thuộc</td>
    </tr>
    <tr>
        <td>Liên từ</td>
        <td>Liên từ phụ thuộc</td>
        <td>Cả liên từ phối hợp và liên từ phụ thuộc</td>
    </tr>
    <tr>
        <td>Độ phức tạp</td>
        <td>Thấp hơn</td>
        <td>Phức tạp hơn, thường dùng trong văn viết học thuật</td>
    </tr>
</tbody>
</table>

<h2>4. Ví Dụ Minh Họa</h2>
<h3>4.1. Câu Phức (Complex Sentence)</h3>
<ul>
<li>Because it was raining, we stayed inside. *(Bởi vì trời đang mưa, chúng tôi ở trong nhà.)*</li>
<li>She passed the exam although she didn’t study much. *(Cô ấy đã đỗ kỳ thi mặc dù cô ấy không học nhiều.)*</li>
</ul>
<h3>4.2. Câu Phức Ghép (Compound-Complex Sentence)</h3>
<ul>
<li>While I was cooking, the phone rang, and my sister answered it. *(Trong khi tôi đang nấu ăn, điện thoại reo, và chị tôi đã trả lời.)*</li>
<li>He didn’t want to join us, but he changed his mind after we explained the plan. *(Anh ấy không muốn tham gia cùng chúng tôi, nhưng anh ấy đã thay đổi ý định sau khi chúng tôi giải thích kế hoạch.)*</li>
</ul>

<h2>5. Lưu Ý</h2>
<ul>
<li><strong>Không nhầm lẫn mệnh đề chính và mệnh đề phụ thuộc:</strong> Mệnh đề chính có thể đứng độc lập, còn mệnh đề phụ thuộc không thể.</li>
<li><strong>Sử dụng đúng liên từ:</strong> Chọn liên từ phù hợp để thể hiện mối quan hệ giữa các mệnh đề.</li>
<li><strong>Đảm bảo sự mạch lạc:</strong> Sử dụng câu phức và câu phức ghép để tăng tính liên kết mà không làm câu văn trở nên rối rắm.</li>
</ul>

<h2>6. Tổng Kết</h2>
<p>Câu phức và câu phức ghép là những cấu trúc ngữ pháp quan trọng giúp diễn đạt các ý tưởng phức tạp một cách rõ ràng và mạch lạc. Sử dụng thành thạo hai loại câu này không chỉ làm phong phú ngôn ngữ mà còn giúp bạn giao tiếp hiệu quả hơn trong các tình huống học thuật và chuyên nghiệp.</p>`,
13:`<h1> Mệnh đề là gì?</h1>
<section>
<p>Để viết được một đoạn văn hay trong tiếng Anh, người viết cần có sự phối hợp nhuần nhuyễn giữa các loại câu khác nhau như câu đơn (Simple Sentence), câu ghép (Compound Sentence), hay câu phức (Complex Sentence). Trong quá trình xây dựng các loại câu này, người viết phải nắm được rõ lý thuyết và cách sử dụng các loại mệnh đề (clause) trong câu.</p>

<h2>Key Takeaways</h2>
<ul>
    <li>Trong đa số trường hợp, mệnh đề có thể được xem là một câu đơn. Một câu có thể được cấu thành từ một hoặc nhiều hơn một mệnh đề.</li>
    <li>Hai loại mệnh đề trong tiếng Anh là mệnh đề độc lập (independent clause) và mệnh đề phụ thuộc (dependent clause).</li>
</ul>

<h3>Các loại mệnh đề phụ thuộc</h3>
<ol>
    <li><strong>Mệnh đề danh từ:</strong> Có thể đóng vai trò chủ ngữ, tân ngữ hoặc bổ nghĩa cho động từ trong câu.</li>
    <li><strong>Mệnh đề trạng ngữ:</strong> Bổ nghĩa cho tính từ/trạng từ, và thường được đặt sau từ mà nó bổ nghĩa.</li>
    <li><strong>Mệnh đề tính từ:</strong> Bổ nghĩa cho danh từ hoặc đại từ và được đặt ngay phía sau danh từ hoặc đại từ mà nó bổ nghĩa.</li>
    <li><strong>Mệnh đề điều kiện:</strong> Dùng để miêu tả, đặt điều kiện cho một tình huống không chắc sẽ xảy ra, thường được biết đến với tên gọi 'mệnh đề If'.</li>
</ol>
</section>

<section>
<h2>Mệnh đề trong tiếng Anh là gì?</h2>
<p>
    Mệnh đề trong tiếng Anh (Clause) là một nhóm các từ bao gồm một <strong>chủ ngữ (Subject)</strong> và một <strong>động từ (Verb)</strong> có liên quan mật thiết với nhau nhằm mục đích truyền tải một thông điệp cụ thể.
</p>
<p>
    Thông thường, mệnh đề thường biểu đạt một hành động hoặc trạng thái tồn tại của một sự vật bất kỳ. Chúng được chia ra làm hai loại mệnh đề chính: 
    <strong>Mệnh đề độc lập (Independent Clause)</strong> hay còn được gọi là mệnh đề chính (Main Clause) và 
    <strong>Mệnh đề phụ thuộc (Dependent Clause)</strong>.
</p>
</section>

<section>
<h2>Phân biệt mệnh đề với các thành phần liên quan</h2>
<p>Khi biểu đạt một ý nghĩa hoàn chỉnh, một mệnh đề thường có đặc tính pha trộn giữa một cụm từ (phrase) và một câu (sentence). Trong đa số trường hợp, mệnh đề có thể được xem là một câu đơn, tuy nhiên, cụm từ lại không được tính là một câu đơn vì chúng không có đủ yếu tố cần thiết để cấu thành một câu hoàn chỉnh.</p>

<h3>Ví dụ:</h3>
<ul>
    <li><strong>Cụm từ:</strong> Sings, very beautifully (hát, rất hay)</li>
    <li><strong>Mệnh đề:</strong> She sings very beautifully (Cô ấy hát rất hay)</li>
</ul>
<p>Trong ví dụ trên, mệnh đề trên được xem như một mệnh đề độc lập, nó có thể đứng riêng lẻ như một câu độc lập hoặc trở thành một phần của câu phức như trong ví dụ dưới đây:</p>
<blockquote>
    She sings very beautifully because she has practiced for many weeks. (Cô ấy hát rất hay vì cô ấy đã luyện tập trong nhiều tuần)
</blockquote>
</section>`

          
    };

function showLesson(id) {
    const details = lessons[id] || "<p>Bài học không tồn tại!</p>";
    document.getElementById('lessonDetails').innerHTML = details;
    document.getElementById('lessonModal').style.display = "block";
}

function closeLesson() {
    document.getElementById('lessonModal').style.display = "none";
}

if (!localStorage.getItem('loggedIn')) {
    alert('Bạn cần đăng nhập để truy cập trang này.');
    window.location.href = 'Đăng nhập.html';
  }